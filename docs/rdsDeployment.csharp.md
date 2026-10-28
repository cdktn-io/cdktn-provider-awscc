# `rdsDeployment` Submodule <a name="`rdsDeployment` Submodule" id="@cdktn/provider-awscc.rdsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDeployment <a name="RdsDeployment" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment awscc_rds_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeployment(Construct Scope, string Id, RdsDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig">RdsDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig">RdsDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetAllocatedStorage">ResetTargetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbClusterParameterGroupName">ResetTargetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbInstanceClass">ResetTargetDbInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbParameterGroupName">ResetTargetDbParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetEngineVersion">ResetTargetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetIops">ResetTargetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageThroughput">ResetTargetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageType">ResetTargetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetUpgradeTargetStorageConfig">ResetUpgradeTargetStorageConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags"></a>

```csharp
private void PutTags(IResolvable|RdsDeploymentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetAllocatedStorage` <a name="ResetTargetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetAllocatedStorage"></a>

```csharp
private void ResetTargetAllocatedStorage()
```

##### `ResetTargetDbClusterParameterGroupName` <a name="ResetTargetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbClusterParameterGroupName"></a>

```csharp
private void ResetTargetDbClusterParameterGroupName()
```

##### `ResetTargetDbInstanceClass` <a name="ResetTargetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbInstanceClass"></a>

```csharp
private void ResetTargetDbInstanceClass()
```

##### `ResetTargetDbParameterGroupName` <a name="ResetTargetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbParameterGroupName"></a>

```csharp
private void ResetTargetDbParameterGroupName()
```

##### `ResetTargetEngineVersion` <a name="ResetTargetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetEngineVersion"></a>

```csharp
private void ResetTargetEngineVersion()
```

##### `ResetTargetIops` <a name="ResetTargetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetIops"></a>

```csharp
private void ResetTargetIops()
```

##### `ResetTargetStorageThroughput` <a name="ResetTargetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageThroughput"></a>

```csharp
private void ResetTargetStorageThroughput()
```

##### `ResetTargetStorageType` <a name="ResetTargetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageType"></a>

```csharp
private void ResetTargetStorageType()
```

##### `ResetUpgradeTargetStorageConfig` <a name="ResetUpgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetUpgradeTargetStorageConfig"></a>

```csharp
private void ResetUpgradeTargetStorageConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentIdentifier">BlueGreenDeploymentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.switchoverDetails">SwitchoverDetails</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList">RdsDeploymentSwitchoverDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList">RdsDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList">RdsDeploymentTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentNameInput">BlueGreenDeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorageInput">TargetAllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupNameInput">TargetDbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClassInput">TargetDbInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupNameInput">TargetDbParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersionInput">TargetEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIopsInput">TargetIopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughputInput">TargetStorageThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageTypeInput">TargetStorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfigInput">UpgradeTargetStorageConfigInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentName">BlueGreenDeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorage">TargetAllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupName">TargetDbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClass">TargetDbInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupName">TargetDbParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersion">TargetEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIops">TargetIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughput">TargetStorageThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageType">TargetStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfig">UpgradeTargetStorageConfig</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BlueGreenDeploymentIdentifier`<sup>Required</sup> <a name="BlueGreenDeploymentIdentifier" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentIdentifier"></a>

```csharp
public string BlueGreenDeploymentIdentifier { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SwitchoverDetails`<sup>Required</sup> <a name="SwitchoverDetails" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.switchoverDetails"></a>

```csharp
public RdsDeploymentSwitchoverDetailsList SwitchoverDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList">RdsDeploymentSwitchoverDetailsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tags"></a>

```csharp
public RdsDeploymentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList">RdsDeploymentTagsList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tasks"></a>

```csharp
public RdsDeploymentTasksList Tasks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList">RdsDeploymentTasksList</a>

---

##### `BlueGreenDeploymentNameInput`<sup>Optional</sup> <a name="BlueGreenDeploymentNameInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentNameInput"></a>

```csharp
public string BlueGreenDeploymentNameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tagsInput"></a>

```csharp
public IResolvable|RdsDeploymentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]

---

##### `TargetAllocatedStorageInput`<sup>Optional</sup> <a name="TargetAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorageInput"></a>

```csharp
public double TargetAllocatedStorageInput { get; }
```

- *Type:* double

---

##### `TargetDbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="TargetDbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupNameInput"></a>

```csharp
public string TargetDbClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `TargetDbInstanceClassInput`<sup>Optional</sup> <a name="TargetDbInstanceClassInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClassInput"></a>

```csharp
public string TargetDbInstanceClassInput { get; }
```

- *Type:* string

---

##### `TargetDbParameterGroupNameInput`<sup>Optional</sup> <a name="TargetDbParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupNameInput"></a>

```csharp
public string TargetDbParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `TargetEngineVersionInput`<sup>Optional</sup> <a name="TargetEngineVersionInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersionInput"></a>

```csharp
public string TargetEngineVersionInput { get; }
```

- *Type:* string

---

##### `TargetIopsInput`<sup>Optional</sup> <a name="TargetIopsInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIopsInput"></a>

```csharp
public double TargetIopsInput { get; }
```

- *Type:* double

---

##### `TargetStorageThroughputInput`<sup>Optional</sup> <a name="TargetStorageThroughputInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughputInput"></a>

```csharp
public double TargetStorageThroughputInput { get; }
```

- *Type:* double

---

##### `TargetStorageTypeInput`<sup>Optional</sup> <a name="TargetStorageTypeInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageTypeInput"></a>

```csharp
public string TargetStorageTypeInput { get; }
```

- *Type:* string

---

##### `UpgradeTargetStorageConfigInput`<sup>Optional</sup> <a name="UpgradeTargetStorageConfigInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfigInput"></a>

```csharp
public bool|IResolvable UpgradeTargetStorageConfigInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlueGreenDeploymentName`<sup>Required</sup> <a name="BlueGreenDeploymentName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentName"></a>

```csharp
public string BlueGreenDeploymentName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `TargetAllocatedStorage`<sup>Required</sup> <a name="TargetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorage"></a>

```csharp
public double TargetAllocatedStorage { get; }
```

- *Type:* double

---

##### `TargetDbClusterParameterGroupName`<sup>Required</sup> <a name="TargetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupName"></a>

```csharp
public string TargetDbClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `TargetDbInstanceClass`<sup>Required</sup> <a name="TargetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClass"></a>

```csharp
public string TargetDbInstanceClass { get; }
```

- *Type:* string

---

##### `TargetDbParameterGroupName`<sup>Required</sup> <a name="TargetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupName"></a>

```csharp
public string TargetDbParameterGroupName { get; }
```

- *Type:* string

---

##### `TargetEngineVersion`<sup>Required</sup> <a name="TargetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersion"></a>

```csharp
public string TargetEngineVersion { get; }
```

- *Type:* string

---

##### `TargetIops`<sup>Required</sup> <a name="TargetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIops"></a>

```csharp
public double TargetIops { get; }
```

- *Type:* double

---

##### `TargetStorageThroughput`<sup>Required</sup> <a name="TargetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughput"></a>

```csharp
public double TargetStorageThroughput { get; }
```

- *Type:* double

---

##### `TargetStorageType`<sup>Required</sup> <a name="TargetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageType"></a>

```csharp
public string TargetStorageType { get; }
```

- *Type:* string

---

##### `UpgradeTargetStorageConfig`<sup>Required</sup> <a name="UpgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfig"></a>

```csharp
public bool|IResolvable UpgradeTargetStorageConfig { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDeploymentConfig <a name="RdsDeploymentConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BlueGreenDeploymentName,
    string Source,
    IResolvable|RdsDeploymentTags[] Tags = null,
    double TargetAllocatedStorage = null,
    string TargetDbClusterParameterGroupName = null,
    string TargetDbInstanceClass = null,
    string TargetDbParameterGroupName = null,
    string TargetEngineVersion = null,
    double TargetIops = null,
    double TargetStorageThroughput = null,
    string TargetStorageType = null,
    bool|IResolvable UpgradeTargetStorageConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.blueGreenDeploymentName">BlueGreenDeploymentName</a></code> | <code>string</code> | The name of the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.source">Source</a></code> | <code>string</code> | The ARN of the source production database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]</code> | The tags assigned to the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetAllocatedStorage">TargetAllocatedStorage</a></code> | <code>double</code> | The allocated storage size in GiB for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbClusterParameterGroupName">TargetDbClusterParameterGroupName</a></code> | <code>string</code> | The DB cluster parameter group for the target Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbInstanceClass">TargetDbInstanceClass</a></code> | <code>string</code> | The DB instance class for target RDS DB instances. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbParameterGroupName">TargetDbParameterGroupName</a></code> | <code>string</code> | The DB parameter group for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetEngineVersion">TargetEngineVersion</a></code> | <code>string</code> | The DB engine version for the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetIops">TargetIops</a></code> | <code>double</code> | The Provisioned IOPS value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageThroughput">TargetStorageThroughput</a></code> | <code>double</code> | The storage throughput value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageType">TargetStorageType</a></code> | <code>string</code> | The storage type for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.upgradeTargetStorageConfig">UpgradeTargetStorageConfig</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to upgrade the storage file system configuration on the target database. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BlueGreenDeploymentName`<sup>Required</sup> <a name="BlueGreenDeploymentName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.blueGreenDeploymentName"></a>

```csharp
public string BlueGreenDeploymentName { get; set; }
```

- *Type:* string

The name of the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#blue_green_deployment_name RdsDeployment#blue_green_deployment_name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The ARN of the source production database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#source RdsDeployment#source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.tags"></a>

```csharp
public IResolvable|RdsDeploymentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]

The tags assigned to the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#tags RdsDeployment#tags}

---

##### `TargetAllocatedStorage`<sup>Optional</sup> <a name="TargetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetAllocatedStorage"></a>

```csharp
public double TargetAllocatedStorage { get; set; }
```

- *Type:* double

The allocated storage size in GiB for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_allocated_storage RdsDeployment#target_allocated_storage}

---

##### `TargetDbClusterParameterGroupName`<sup>Optional</sup> <a name="TargetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbClusterParameterGroupName"></a>

```csharp
public string TargetDbClusterParameterGroupName { get; set; }
```

- *Type:* string

The DB cluster parameter group for the target Aurora DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_cluster_parameter_group_name RdsDeployment#target_db_cluster_parameter_group_name}

---

##### `TargetDbInstanceClass`<sup>Optional</sup> <a name="TargetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbInstanceClass"></a>

```csharp
public string TargetDbInstanceClass { get; set; }
```

- *Type:* string

The DB instance class for target RDS DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_instance_class RdsDeployment#target_db_instance_class}

---

##### `TargetDbParameterGroupName`<sup>Optional</sup> <a name="TargetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbParameterGroupName"></a>

```csharp
public string TargetDbParameterGroupName { get; set; }
```

- *Type:* string

The DB parameter group for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_parameter_group_name RdsDeployment#target_db_parameter_group_name}

---

##### `TargetEngineVersion`<sup>Optional</sup> <a name="TargetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetEngineVersion"></a>

```csharp
public string TargetEngineVersion { get; set; }
```

- *Type:* string

The DB engine version for the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_engine_version RdsDeployment#target_engine_version}

---

##### `TargetIops`<sup>Optional</sup> <a name="TargetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetIops"></a>

```csharp
public double TargetIops { get; set; }
```

- *Type:* double

The Provisioned IOPS value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_iops RdsDeployment#target_iops}

---

##### `TargetStorageThroughput`<sup>Optional</sup> <a name="TargetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageThroughput"></a>

```csharp
public double TargetStorageThroughput { get; set; }
```

- *Type:* double

The storage throughput value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_throughput RdsDeployment#target_storage_throughput}

---

##### `TargetStorageType`<sup>Optional</sup> <a name="TargetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageType"></a>

```csharp
public string TargetStorageType { get; set; }
```

- *Type:* string

The storage type for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_type RdsDeployment#target_storage_type}

---

##### `UpgradeTargetStorageConfig`<sup>Optional</sup> <a name="UpgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.upgradeTargetStorageConfig"></a>

```csharp
public bool|IResolvable UpgradeTargetStorageConfig { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to upgrade the storage file system configuration on the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#upgrade_target_storage_config RdsDeployment#upgrade_target_storage_config}

---

### RdsDeploymentSwitchoverDetails <a name="RdsDeploymentSwitchoverDetails" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentSwitchoverDetails {

};
```


### RdsDeploymentTags <a name="RdsDeploymentTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#key RdsDeployment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#value RdsDeployment#value}

---

### RdsDeploymentTasks <a name="RdsDeploymentTasks" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentTasks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### RdsDeploymentSwitchoverDetailsList <a name="RdsDeploymentSwitchoverDetailsList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentSwitchoverDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get"></a>

```csharp
private RdsDeploymentSwitchoverDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RdsDeploymentSwitchoverDetailsOutputReference <a name="RdsDeploymentSwitchoverDetailsOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentSwitchoverDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.sourceMember">SourceMember</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.switchoverDetailStatus">SwitchoverDetailStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.targetMember">TargetMember</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails">RdsDeploymentSwitchoverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceMember`<sup>Required</sup> <a name="SourceMember" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.sourceMember"></a>

```csharp
public string SourceMember { get; }
```

- *Type:* string

---

##### `SwitchoverDetailStatus`<sup>Required</sup> <a name="SwitchoverDetailStatus" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.switchoverDetailStatus"></a>

```csharp
public string SwitchoverDetailStatus { get; }
```

- *Type:* string

---

##### `TargetMember`<sup>Required</sup> <a name="TargetMember" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.targetMember"></a>

```csharp
public string TargetMember { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.internalValue"></a>

```csharp
public RdsDeploymentSwitchoverDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails">RdsDeploymentSwitchoverDetails</a>

---


### RdsDeploymentTagsList <a name="RdsDeploymentTagsList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get"></a>

```csharp
private RdsDeploymentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.internalValue"></a>

```csharp
public IResolvable|RdsDeploymentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>[]

---


### RdsDeploymentTagsOutputReference <a name="RdsDeploymentTagsOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDeploymentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>

---


### RdsDeploymentTasksList <a name="RdsDeploymentTasksList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get"></a>

```csharp
private RdsDeploymentTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RdsDeploymentTasksOutputReference <a name="RdsDeploymentTasksOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDeploymentTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskName">TaskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskStatus">TaskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks">RdsDeploymentTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskName"></a>

```csharp
public string TaskName { get; }
```

- *Type:* string

---

##### `TaskStatus`<sup>Required</sup> <a name="TaskStatus" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskStatus"></a>

```csharp
public string TaskStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.internalValue"></a>

```csharp
public RdsDeploymentTasks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks">RdsDeploymentTasks</a>

---



