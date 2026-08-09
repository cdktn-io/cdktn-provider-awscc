# `m2Environment` Submodule <a name="`m2Environment` Submodule" id="@cdktn/provider-awscc.m2Environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### M2Environment <a name="M2Environment" id="@cdktn/provider-awscc.m2Environment.M2Environment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment awscc_m2_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2Environment(Construct Scope, string Id, M2EnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig">M2EnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig">M2EnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.putHighAvailabilityConfig">PutHighAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.putStorageConfigurations">PutStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetHighAvailabilityConfig">ResetHighAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetStorageConfigurations">ResetStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.m2Environment.M2Environment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.m2Environment.M2Environment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.m2Environment.M2Environment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.m2Environment.M2Environment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.m2Environment.M2Environment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.m2Environment.M2Environment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.m2Environment.M2Environment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.m2Environment.M2Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.m2Environment.M2Environment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.m2Environment.M2Environment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.m2Environment.M2Environment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.m2Environment.M2Environment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.m2Environment.M2Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.m2Environment.M2Environment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.m2Environment.M2Environment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.m2Environment.M2Environment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHighAvailabilityConfig` <a name="PutHighAvailabilityConfig" id="@cdktn/provider-awscc.m2Environment.M2Environment.putHighAvailabilityConfig"></a>

```csharp
private void PutHighAvailabilityConfig(M2EnvironmentHighAvailabilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.m2Environment.M2Environment.putHighAvailabilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

---

##### `PutStorageConfigurations` <a name="PutStorageConfigurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.putStorageConfigurations"></a>

```csharp
private void PutStorageConfigurations(IResolvable|M2EnvironmentStorageConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.m2Environment.M2Environment.putStorageConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetHighAvailabilityConfig` <a name="ResetHighAvailabilityConfig" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetHighAvailabilityConfig"></a>

```csharp
private void ResetHighAvailabilityConfig()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetStorageConfigurations` <a name="ResetStorageConfigurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetStorageConfigurations"></a>

```csharp
private void ResetStorageConfigurations()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a M2Environment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.m2Environment.M2Environment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

M2Environment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.m2Environment.M2Environment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

M2Environment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

M2Environment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

M2Environment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a M2Environment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the M2Environment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing M2Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the M2Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentArn">EnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfig">HighAvailabilityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference">M2EnvironmentHighAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurations">StorageConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList">M2EnvironmentStorageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfigInput">HighAvailabilityConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurationsInput">StorageConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentArn"></a>

```csharp
public string EnvironmentArn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `HighAvailabilityConfig`<sup>Required</sup> <a name="HighAvailabilityConfig" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfig"></a>

```csharp
public M2EnvironmentHighAvailabilityConfigOutputReference HighAvailabilityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference">M2EnvironmentHighAvailabilityConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageConfigurations`<sup>Required</sup> <a name="StorageConfigurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurations"></a>

```csharp
public M2EnvironmentStorageConfigurationsList StorageConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList">M2EnvironmentStorageConfigurationsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `HighAvailabilityConfigInput`<sup>Optional</sup> <a name="HighAvailabilityConfigInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfigInput"></a>

```csharp
public IResolvable|M2EnvironmentHighAvailabilityConfig HighAvailabilityConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessibleInput"></a>

```csharp
public bool|IResolvable PubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `StorageConfigurationsInput`<sup>Optional</sup> <a name="StorageConfigurationsInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurationsInput"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurations[] StorageConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### M2EnvironmentConfig <a name="M2EnvironmentConfig" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EngineType,
    string InstanceType,
    string Name,
    string Description = null,
    string EngineVersion = null,
    M2EnvironmentHighAvailabilityConfig HighAvailabilityConfig = null,
    string KmsKeyId = null,
    string NetworkType = null,
    string PreferredMaintenanceWindow = null,
    bool|IResolvable PubliclyAccessible = null,
    string[] SecurityGroupIds = null,
    IResolvable|M2EnvironmentStorageConfigurations[] StorageConfigurations = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineType">EngineType</a></code> | <code>string</code> | The target platform for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The type of instance underlying the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.name">Name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.description">Description</a></code> | <code>string</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The version of the runtime engine for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.highAvailabilityConfig">HighAvailabilityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | Defines the details of a high availability configuration. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#network_type M2Environment#network_type}. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Configures a desired maintenance window for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the environment is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The list of security groups for the VPC associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.storageConfigurations">StorageConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]</code> | The storage configurations defined for the runtime environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The unique identifiers of the subnets assigned to this runtime environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags associated to this environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

The target platform for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The type of instance underlying the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#name M2Environment#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#description M2Environment#description}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The version of the runtime engine for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}

---

##### `HighAvailabilityConfig`<sup>Optional</sup> <a name="HighAvailabilityConfig" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.highAvailabilityConfig"></a>

```csharp
public M2EnvironmentHighAvailabilityConfig HighAvailabilityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

Defines the details of a high availability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#network_type M2Environment#network_type}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Configures a desired maintenance window for the environment.

If you do not provide a value, a random system-generated value will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.publiclyAccessible"></a>

```csharp
public bool|IResolvable PubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the environment is publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The list of security groups for the VPC associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}

---

##### `StorageConfigurations`<sup>Optional</sup> <a name="StorageConfigurations" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.storageConfigurations"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurations[] StorageConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]

The storage configurations defined for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#storage_configurations M2Environment#storage_configurations}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The unique identifiers of the subnets assigned to this runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags associated to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#tags M2Environment#tags}

---

### M2EnvironmentHighAvailabilityConfig <a name="M2EnvironmentHighAvailabilityConfig" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentHighAvailabilityConfig {
    double DesiredCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}. |

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}.

---

### M2EnvironmentStorageConfigurations <a name="M2EnvironmentStorageConfigurations" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurations {
    M2EnvironmentStorageConfigurationsEfs Efs = null,
    M2EnvironmentStorageConfigurationsFsx Fsx = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.efs">Efs</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a></code> | Defines the storage configuration for an Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.fsx">Fsx</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a></code> | Defines the storage configuration for an Amazon FSx file system. |

---

##### `Efs`<sup>Optional</sup> <a name="Efs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.efs"></a>

```csharp
public M2EnvironmentStorageConfigurationsEfs Efs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

Defines the storage configuration for an Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#efs M2Environment#efs}

---

##### `Fsx`<sup>Optional</sup> <a name="Fsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.fsx"></a>

```csharp
public M2EnvironmentStorageConfigurationsFsx Fsx { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

Defines the storage configuration for an Amazon FSx file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#fsx M2Environment#fsx}

---

### M2EnvironmentStorageConfigurationsEfs <a name="M2EnvironmentStorageConfigurationsEfs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurationsEfs {
    string FileSystemId = null,
    string MountPoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | The file system identifier. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.mountPoint">MountPoint</a></code> | <code>string</code> | The mount point for the file system. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

The file system identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

The mount point for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}

---

### M2EnvironmentStorageConfigurationsFsx <a name="M2EnvironmentStorageConfigurationsFsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurationsFsx {
    string FileSystemId = null,
    string MountPoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | The file system identifier. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.mountPoint">MountPoint</a></code> | <code>string</code> | The mount point for the file system. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

The file system identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

The mount point for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}

---

## Classes <a name="Classes" id="Classes"></a>

### M2EnvironmentHighAvailabilityConfigOutputReference <a name="M2EnvironmentHighAvailabilityConfigOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentHighAvailabilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resetDesiredCapacity"></a>

```csharp
private void ResetDesiredCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|M2EnvironmentHighAvailabilityConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

---


### M2EnvironmentStorageConfigurationsEfsOutputReference <a name="M2EnvironmentStorageConfigurationsEfsOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurationsEfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetMountPoint"></a>

```csharp
private void ResetMountPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurationsEfs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

---


### M2EnvironmentStorageConfigurationsFsxOutputReference <a name="M2EnvironmentStorageConfigurationsFsxOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurationsFsxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetMountPoint"></a>

```csharp
private void ResetMountPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.internalValue"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurationsFsx InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

---


### M2EnvironmentStorageConfigurationsList <a name="M2EnvironmentStorageConfigurationsList" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.get"></a>

```csharp
private M2EnvironmentStorageConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>[]

---


### M2EnvironmentStorageConfigurationsOutputReference <a name="M2EnvironmentStorageConfigurationsOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new M2EnvironmentStorageConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs">PutEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx">PutFsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetEfs">ResetEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetFsx">ResetFsx</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfs` <a name="PutEfs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs"></a>

```csharp
private void PutEfs(M2EnvironmentStorageConfigurationsEfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

---

##### `PutFsx` <a name="PutFsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx"></a>

```csharp
private void PutFsx(M2EnvironmentStorageConfigurationsFsx Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

---

##### `ResetEfs` <a name="ResetEfs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetEfs"></a>

```csharp
private void ResetEfs()
```

##### `ResetFsx` <a name="ResetFsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetFsx"></a>

```csharp
private void ResetFsx()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efs">Efs</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference">M2EnvironmentStorageConfigurationsEfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsx">Fsx</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference">M2EnvironmentStorageConfigurationsFsxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efsInput">EfsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsxInput">FsxInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Efs`<sup>Required</sup> <a name="Efs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efs"></a>

```csharp
public M2EnvironmentStorageConfigurationsEfsOutputReference Efs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference">M2EnvironmentStorageConfigurationsEfsOutputReference</a>

---

##### `Fsx`<sup>Required</sup> <a name="Fsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsx"></a>

```csharp
public M2EnvironmentStorageConfigurationsFsxOutputReference Fsx { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference">M2EnvironmentStorageConfigurationsFsxOutputReference</a>

---

##### `EfsInput`<sup>Optional</sup> <a name="EfsInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efsInput"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurationsEfs EfsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

---

##### `FsxInput`<sup>Optional</sup> <a name="FsxInput" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsxInput"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurationsFsx FsxInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|M2EnvironmentStorageConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>

---



