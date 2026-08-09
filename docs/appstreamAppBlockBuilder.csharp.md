# `appstreamAppBlockBuilder` Submodule <a name="`appstreamAppBlockBuilder` Submodule" id="@cdktn/provider-awscc.appstreamAppBlockBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlockBuilder <a name="AppstreamAppBlockBuilder" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder awscc_appstream_app_block_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilder(Construct Scope, string Id, AppstreamAppBlockBuilderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig">AppstreamAppBlockBuilderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig">AppstreamAppBlockBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints">PutAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAccessEndpoints">ResetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAppBlockArns">ResetAppBlockArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetEnableDefaultInternetAccess">ResetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessEndpoints` <a name="PutAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints"></a>

```csharp
private void PutAccessEndpoints(IResolvable|AppstreamAppBlockBuilderAccessEndpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags"></a>

```csharp
private void PutTags(IResolvable|AppstreamAppBlockBuilderTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig"></a>

```csharp
private void PutVpcConfig(AppstreamAppBlockBuilderVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---

##### `ResetAccessEndpoints` <a name="ResetAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAccessEndpoints"></a>

```csharp
private void ResetAccessEndpoints()
```

##### `ResetAppBlockArns` <a name="ResetAppBlockArns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAppBlockArns"></a>

```csharp
private void ResetAppBlockArns()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableDefaultInternetAccess` <a name="ResetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetEnableDefaultInternetAccess"></a>

```csharp
private void ResetEnableDefaultInternetAccess()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlockBuilder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlockBuilder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlockBuilder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamAppBlockBuilder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamAppBlockBuilder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamAppBlockBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlockBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList">AppstreamAppBlockBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList">AppstreamAppBlockBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference">AppstreamAppBlockBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpointsInput">AccessEndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArnsInput">AppBlockArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccessInput">EnableDefaultInternetAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArns">AppBlockArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platform">Platform</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpoints"></a>

```csharp
public AppstreamAppBlockBuilderAccessEndpointsList AccessEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList">AppstreamAppBlockBuilderAccessEndpointsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tags"></a>

```csharp
public AppstreamAppBlockBuilderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList">AppstreamAppBlockBuilderTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfig"></a>

```csharp
public AppstreamAppBlockBuilderVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference">AppstreamAppBlockBuilderVpcConfigOutputReference</a>

---

##### `AccessEndpointsInput`<sup>Optional</sup> <a name="AccessEndpointsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpointsInput"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderAccessEndpoints[] AccessEndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

---

##### `AppBlockArnsInput`<sup>Optional</sup> <a name="AppBlockArnsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArnsInput"></a>

```csharp
public string[] AppBlockArnsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableDefaultInternetAccessInput`<sup>Optional</sup> <a name="EnableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccessInput"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tagsInput"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfigInput"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---

##### `AppBlockArns`<sup>Required</sup> <a name="AppBlockArns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArns"></a>

```csharp
public string[] AppBlockArns { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableDefaultInternetAccess`<sup>Required</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccess"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockBuilderAccessEndpoints <a name="AppstreamAppBlockBuilderAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderAccessEndpoints {
    string EndpointType = null,
    string VpceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.vpceId">VpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}. |

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}.

---

##### `VpceId`<sup>Optional</sup> <a name="VpceId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.vpceId"></a>

```csharp
public string VpceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}.

---

### AppstreamAppBlockBuilderConfig <a name="AppstreamAppBlockBuilderConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceType,
    string Name,
    string Platform,
    AppstreamAppBlockBuilderVpcConfig VpcConfig,
    IResolvable|AppstreamAppBlockBuilderAccessEndpoints[] AccessEndpoints = null,
    string[] AppBlockArns = null,
    string Description = null,
    string DisplayName = null,
    bool|IResolvable EnableDefaultInternetAccess = null,
    string IamRoleArn = null,
    IResolvable|AppstreamAppBlockBuilderTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.accessEndpoints">AccessEndpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.appBlockArns">AppBlockArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}.

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}.

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.vpcConfig"></a>

```csharp
public AppstreamAppBlockBuilderVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}.

---

##### `AccessEndpoints`<sup>Optional</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.accessEndpoints"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderAccessEndpoints[] AccessEndpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}.

---

##### `AppBlockArns`<sup>Optional</sup> <a name="AppBlockArns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.appBlockArns"></a>

```csharp
public string[] AppBlockArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}.

---

##### `EnableDefaultInternetAccess`<sup>Optional</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.enableDefaultInternetAccess"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.tags"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}.

---

### AppstreamAppBlockBuilderTags <a name="AppstreamAppBlockBuilderTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}.

---

### AppstreamAppBlockBuilderVpcConfig <a name="AppstreamAppBlockBuilderVpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderVpcConfig {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockBuilderAccessEndpointsList <a name="AppstreamAppBlockBuilderAccessEndpointsList" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderAccessEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get"></a>

```csharp
private AppstreamAppBlockBuilderAccessEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderAccessEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>[]

---


### AppstreamAppBlockBuilderAccessEndpointsOutputReference <a name="AppstreamAppBlockBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderAccessEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetVpceId">ResetVpceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```

##### `ResetVpceId` <a name="ResetVpceId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetVpceId"></a>

```csharp
private void ResetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceIdInput">VpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId">VpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpceIdInput`<sup>Optional</sup> <a name="VpceIdInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceIdInput"></a>

```csharp
public string VpceIdInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```csharp
public string VpceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderAccessEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>

---


### AppstreamAppBlockBuilderTagsList <a name="AppstreamAppBlockBuilderTagsList" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get"></a>

```csharp
private AppstreamAppBlockBuilderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>[]

---


### AppstreamAppBlockBuilderTagsOutputReference <a name="AppstreamAppBlockBuilderTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>

---


### AppstreamAppBlockBuilderVpcConfigOutputReference <a name="AppstreamAppBlockBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamAppBlockBuilderVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamAppBlockBuilderVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---



