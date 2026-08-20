# `cloudformationTypeActivation` Submodule <a name="`cloudformationTypeActivation` Submodule" id="@cdktn/provider-awscc.cloudformationTypeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationTypeActivation <a name="CloudformationTypeActivation" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationTypeActivation(Construct Scope, string Id, CloudformationTypeActivationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig">CloudformationTypeActivationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig">CloudformationTypeActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate">ResetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion">ResetMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn">ResetPublicTypeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId">ResetPublisherId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias">ResetTypeNameAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump">ResetVersionBump</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(CloudformationTypeActivationLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `ResetAutoUpdate` <a name="ResetAutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate"></a>

```csharp
private void ResetAutoUpdate()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMajorVersion` <a name="ResetMajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion"></a>

```csharp
private void ResetMajorVersion()
```

##### `ResetPublicTypeArn` <a name="ResetPublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn"></a>

```csharp
private void ResetPublicTypeArn()
```

##### `ResetPublisherId` <a name="ResetPublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId"></a>

```csharp
private void ResetPublisherId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypeNameAlias` <a name="ResetTypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias"></a>

```csharp
private void ResetTypeNameAlias()
```

##### `ResetVersionBump` <a name="ResetVersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump"></a>

```csharp
private void ResetVersionBump()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationTypeActivation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationTypeActivation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationTypeActivation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationTypeActivation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationTypeActivation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationTypeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationTypeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput">AutoUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput">MajorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput">PublicTypeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput">PublisherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput">TypeNameAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput">VersionBumpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate">AutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion">MajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn">PublicTypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId">PublisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias">TypeNameAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump">VersionBump</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig"></a>

```csharp
public CloudformationTypeActivationLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a>

---

##### `AutoUpdateInput`<sup>Optional</sup> <a name="AutoUpdateInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput"></a>

```csharp
public bool|IResolvable AutoUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput"></a>

```csharp
public IResolvable|CloudformationTypeActivationLoggingConfig LoggingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `MajorVersionInput`<sup>Optional</sup> <a name="MajorVersionInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput"></a>

```csharp
public string MajorVersionInput { get; }
```

- *Type:* string

---

##### `PublicTypeArnInput`<sup>Optional</sup> <a name="PublicTypeArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput"></a>

```csharp
public string PublicTypeArnInput { get; }
```

- *Type:* string

---

##### `PublisherIdInput`<sup>Optional</sup> <a name="PublisherIdInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput"></a>

```csharp
public string PublisherIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TypeNameAliasInput`<sup>Optional</sup> <a name="TypeNameAliasInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput"></a>

```csharp
public string TypeNameAliasInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `VersionBumpInput`<sup>Optional</sup> <a name="VersionBumpInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput"></a>

```csharp
public string VersionBumpInput { get; }
```

- *Type:* string

---

##### `AutoUpdate`<sup>Required</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate"></a>

```csharp
public bool|IResolvable AutoUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `MajorVersion`<sup>Required</sup> <a name="MajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion"></a>

```csharp
public string MajorVersion { get; }
```

- *Type:* string

---

##### `PublicTypeArn`<sup>Required</sup> <a name="PublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn"></a>

```csharp
public string PublicTypeArn { get; }
```

- *Type:* string

---

##### `PublisherId`<sup>Required</sup> <a name="PublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId"></a>

```csharp
public string PublisherId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypeNameAlias`<sup>Required</sup> <a name="TypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias"></a>

```csharp
public string TypeNameAlias { get; }
```

- *Type:* string

---

##### `VersionBump`<sup>Required</sup> <a name="VersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump"></a>

```csharp
public string VersionBump { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeActivationConfig <a name="CloudformationTypeActivationConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationTypeActivationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AutoUpdate = null,
    string ExecutionRoleArn = null,
    CloudformationTypeActivationLoggingConfig LoggingConfig = null,
    string MajorVersion = null,
    string PublicTypeArn = null,
    string PublisherId = null,
    string Type = null,
    string TypeName = null,
    string TypeNameAlias = null,
    string VersionBump = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate">AutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion">MajorVersion</a></code> | <code>string</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn">PublicTypeArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId">PublisherId</a></code> | <code>string</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type">Type</a></code> | <code>string</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName">TypeName</a></code> | <code>string</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias">TypeNameAlias</a></code> | <code>string</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump">VersionBump</a></code> | <code>string</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoUpdate`<sup>Optional</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate"></a>

```csharp
public bool|IResolvable AutoUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig"></a>

```csharp
public CloudformationTypeActivationLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `MajorVersion`<sup>Optional</sup> <a name="MajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion"></a>

```csharp
public string MajorVersion { get; set; }
```

- *Type:* string

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `PublicTypeArn`<sup>Optional</sup> <a name="PublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn"></a>

```csharp
public string PublicTypeArn { get; set; }
```

- *Type:* string

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `PublisherId`<sup>Optional</sup> <a name="PublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId"></a>

```csharp
public string PublisherId { get; set; }
```

- *Type:* string

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `TypeNameAlias`<sup>Optional</sup> <a name="TypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias"></a>

```csharp
public string TypeNameAlias { get; set; }
```

- *Type:* string

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `VersionBump`<sup>Optional</sup> <a name="VersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump"></a>

```csharp
public string VersionBump { get; set; }
```

- *Type:* string

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

### CloudformationTypeActivationLoggingConfig <a name="CloudformationTypeActivationLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationTypeActivationLoggingConfig {
    string LogGroupName = null,
    string LogRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName">LogGroupName</a></code> | <code>string</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn">LogRoleArn</a></code> | <code>string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#log_group_name CloudformationTypeActivation#log_group_name}

---

##### `LogRoleArn`<sup>Optional</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn"></a>

```csharp
public string LogRoleArn { get; set; }
```

- *Type:* string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#log_role_arn CloudformationTypeActivation#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeActivationLoggingConfigOutputReference <a name="CloudformationTypeActivationLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationTypeActivationLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn">ResetLogRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```

##### `ResetLogRoleArn` <a name="ResetLogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn"></a>

```csharp
private void ResetLogRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput">LogRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn">LogRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogRoleArnInput`<sup>Optional</sup> <a name="LogRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput"></a>

```csharp
public string LogRoleArnInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn"></a>

```csharp
public string LogRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudformationTypeActivationLoggingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---



