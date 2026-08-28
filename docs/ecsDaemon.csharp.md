# `ecsDaemon` Submodule <a name="`ecsDaemon` Submodule" id="@cdktn/provider-awscc.ecsDaemon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemon <a name="EcsDaemon" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon awscc_ecs_daemon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemon(Construct Scope, string Id, EcsDaemonConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig">EcsDaemonConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig">EcsDaemonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration">PutDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetCapacityProviderArns">ResetCapacityProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetClusterArn">ResetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonName">ResetDaemonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonTaskDefinitionArn">ResetDaemonTaskDefinitionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDeploymentConfiguration">ResetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags">ResetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableExecuteCommand">ResetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentConfiguration` <a name="PutDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration"></a>

```csharp
private void PutDeploymentConfiguration(EcsDaemonDeploymentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags"></a>

```csharp
private void PutTags(IResolvable|EcsDaemonTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]

---

##### `ResetCapacityProviderArns` <a name="ResetCapacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetCapacityProviderArns"></a>

```csharp
private void ResetCapacityProviderArns()
```

##### `ResetClusterArn` <a name="ResetClusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetClusterArn"></a>

```csharp
private void ResetClusterArn()
```

##### `ResetDaemonName` <a name="ResetDaemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonName"></a>

```csharp
private void ResetDaemonName()
```

##### `ResetDaemonTaskDefinitionArn` <a name="ResetDaemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonTaskDefinitionArn"></a>

```csharp
private void ResetDaemonTaskDefinitionArn()
```

##### `ResetDeploymentConfiguration` <a name="ResetDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDeploymentConfiguration"></a>

```csharp
private void ResetDeploymentConfiguration()
```

##### `ResetEnableEcsManagedTags` <a name="ResetEnableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags"></a>

```csharp
private void ResetEnableEcsManagedTags()
```

##### `ResetEnableExecuteCommand` <a name="ResetEnableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableExecuteCommand"></a>

```csharp
private void ResetEnableExecuteCommand()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsDaemon.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsDaemon.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsDaemon.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsDaemon.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsDaemon to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsDaemon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonArn">DaemonArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonStatus">DaemonStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentArn">DeploymentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference">EcsDaemonDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList">EcsDaemonTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput">CapacityProviderArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonNameInput">DaemonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput">DaemonTaskDefinitionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput">DeploymentConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput">EnableEcsManagedTagsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput">EnableExecuteCommandInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArns">CapacityProviderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonName">DaemonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn">DaemonTaskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DaemonArn`<sup>Required</sup> <a name="DaemonArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonArn"></a>

```csharp
public string DaemonArn { get; }
```

- *Type:* string

---

##### `DaemonStatus`<sup>Required</sup> <a name="DaemonStatus" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonStatus"></a>

```csharp
public string DaemonStatus { get; }
```

- *Type:* string

---

##### `DeploymentArn`<sup>Required</sup> <a name="DeploymentArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentArn"></a>

```csharp
public string DeploymentArn { get; }
```

- *Type:* string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfiguration"></a>

```csharp
public EcsDaemonDeploymentConfigurationOutputReference DeploymentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference">EcsDaemonDeploymentConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tags"></a>

```csharp
public EcsDaemonTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList">EcsDaemonTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `CapacityProviderArnsInput`<sup>Optional</sup> <a name="CapacityProviderArnsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput"></a>

```csharp
public string[] CapacityProviderArnsInput { get; }
```

- *Type:* string[]

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `DaemonNameInput`<sup>Optional</sup> <a name="DaemonNameInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonNameInput"></a>

```csharp
public string DaemonNameInput { get; }
```

- *Type:* string

---

##### `DaemonTaskDefinitionArnInput`<sup>Optional</sup> <a name="DaemonTaskDefinitionArnInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput"></a>

```csharp
public string DaemonTaskDefinitionArnInput { get; }
```

- *Type:* string

---

##### `DeploymentConfigurationInput`<sup>Optional</sup> <a name="DeploymentConfigurationInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput"></a>

```csharp
public IResolvable|EcsDaemonDeploymentConfiguration DeploymentConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---

##### `EnableEcsManagedTagsInput`<sup>Optional</sup> <a name="EnableEcsManagedTagsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput"></a>

```csharp
public bool|IResolvable EnableEcsManagedTagsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableExecuteCommandInput`<sup>Optional</sup> <a name="EnableExecuteCommandInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput"></a>

```csharp
public bool|IResolvable EnableExecuteCommandInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTagsInput"></a>

```csharp
public string PropagateTagsInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tagsInput"></a>

```csharp
public IResolvable|EcsDaemonTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]

---

##### `CapacityProviderArns`<sup>Required</sup> <a name="CapacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArns"></a>

```csharp
public string[] CapacityProviderArns { get; }
```

- *Type:* string[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `DaemonName`<sup>Required</sup> <a name="DaemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonName"></a>

```csharp
public string DaemonName { get; }
```

- *Type:* string

---

##### `DaemonTaskDefinitionArn`<sup>Required</sup> <a name="DaemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn"></a>

```csharp
public string DaemonTaskDefinitionArn { get; }
```

- *Type:* string

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTags"></a>

```csharp
public bool|IResolvable EnableEcsManagedTags { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommand"></a>

```csharp
public bool|IResolvable EnableExecuteCommand { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonConfig <a name="EcsDaemonConfig" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] CapacityProviderArns = null,
    string ClusterArn = null,
    string DaemonName = null,
    string DaemonTaskDefinitionArn = null,
    EcsDaemonDeploymentConfiguration DeploymentConfiguration = null,
    bool|IResolvable EnableEcsManagedTags = null,
    bool|IResolvable EnableExecuteCommand = null,
    string PropagateTags = null,
    IResolvable|EcsDaemonTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns">CapacityProviderArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the cluster that the daemon is running in. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonName">DaemonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn">DaemonTaskDefinitionArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the daemon task definition used by this revision. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | The deployment configuration used for this daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Amazon ECS managed tags are turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the execute command functionality is turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.propagateTags">PropagateTags</a></code> | <code>string</code> | Specifies whether tags are propagated from the daemon to the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityProviderArns`<sup>Optional</sup> <a name="CapacityProviderArns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns"></a>

```csharp
public string[] CapacityProviderArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}

---

##### `ClusterArn`<sup>Optional</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the cluster that the daemon is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}

---

##### `DaemonName`<sup>Optional</sup> <a name="DaemonName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonName"></a>

```csharp
public string DaemonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}.

---

##### `DaemonTaskDefinitionArn`<sup>Optional</sup> <a name="DaemonTaskDefinitionArn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn"></a>

```csharp
public string DaemonTaskDefinitionArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the daemon task definition used by this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}

---

##### `DeploymentConfiguration`<sup>Optional</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration"></a>

```csharp
public EcsDaemonDeploymentConfiguration DeploymentConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

The deployment configuration used for this daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `EnableEcsManagedTags`<sup>Optional</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags"></a>

```csharp
public bool|IResolvable EnableEcsManagedTags { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}

---

##### `EnableExecuteCommand`<sup>Optional</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand"></a>

```csharp
public bool|IResolvable EnableExecuteCommand { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the execute command functionality is turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.propagateTags"></a>

```csharp
public string PropagateTags { get; set; }
```

- *Type:* string

Specifies whether tags are propagated from the daemon to the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.tags"></a>

```csharp
public IResolvable|EcsDaemonTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

### EcsDaemonDeploymentConfiguration <a name="EcsDaemonDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonDeploymentConfiguration {
    EcsDaemonDeploymentConfigurationAlarms Alarms = null,
    double BakeTimeInMinutes = null,
    double DrainPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | The CloudWatch alarm configuration for the daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes">BakeTimeInMinutes</a></code> | <code>double</code> | The amount of time (in minutes) to wait after a successful deployment step before proceeding. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent">DrainPercent</a></code> | <code>double</code> | The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms"></a>

```csharp
public EcsDaemonDeploymentConfigurationAlarms Alarms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

The CloudWatch alarm configuration for the daemon deployment.

When alarms are triggered during a deployment, the deployment can be automatically rolled back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#alarms EcsDaemon#alarms}

---

##### `BakeTimeInMinutes`<sup>Optional</sup> <a name="BakeTimeInMinutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes"></a>

```csharp
public double BakeTimeInMinutes { get; set; }
```

- *Type:* double

The amount of time (in minutes) to wait after a successful deployment step before proceeding.

This allows time to monitor for issues before continuing. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#bake_time_in_minutes EcsDaemon#bake_time_in_minutes}

---

##### `DrainPercent`<sup>Optional</sup> <a name="DrainPercent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent"></a>

```csharp
public double DrainPercent { get; set; }
```

- *Type:* double

The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#drain_percent EcsDaemon#drain_percent}

---

### EcsDaemonDeploymentConfigurationAlarms <a name="EcsDaemonDeploymentConfigurationAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonDeploymentConfigurationAlarms {
    string[] AlarmNames = null,
    bool|IResolvable Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | The CloudWatch alarm names to monitor during a daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``. |

---

##### `AlarmNames`<sup>Optional</sup> <a name="AlarmNames" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; set; }
```

- *Type:* string[]

The CloudWatch alarm names to monitor during a daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#alarm_names EcsDaemon#alarm_names}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable EcsDaemon#enable}

---

### EcsDaemonTags <a name="EcsDaemonTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.key">Key</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.value">Value</a></code> | <code>string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#key EcsDaemon#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The optional part of a key-value pair that make up a tag.

A `value` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#value EcsDaemon#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonDeploymentConfigurationAlarmsOutputReference <a name="EcsDaemonDeploymentConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonDeploymentConfigurationAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames">ResetAlarmNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmNames` <a name="ResetAlarmNames" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames"></a>

```csharp
private void ResetAlarmNames()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput">AlarmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput">EnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNamesInput`<sup>Optional</sup> <a name="AlarmNamesInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput"></a>

```csharp
public string[] AlarmNamesInput { get; }
```

- *Type:* string[]

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput"></a>

```csharp
public bool|IResolvable EnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonDeploymentConfigurationAlarms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---


### EcsDaemonDeploymentConfigurationOutputReference <a name="EcsDaemonDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonDeploymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes">ResetBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent">ResetDrainPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms"></a>

```csharp
private void PutAlarms(EcsDaemonDeploymentConfigurationAlarms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetBakeTimeInMinutes` <a name="ResetBakeTimeInMinutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes"></a>

```csharp
private void ResetBakeTimeInMinutes()
```

##### `ResetDrainPercent` <a name="ResetDrainPercent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent"></a>

```csharp
private void ResetDrainPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference">EcsDaemonDeploymentConfigurationAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput">BakeTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput">DrainPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">BakeTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent">DrainPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms"></a>

```csharp
public EcsDaemonDeploymentConfigurationAlarmsOutputReference Alarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference">EcsDaemonDeploymentConfigurationAlarmsOutputReference</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput"></a>

```csharp
public IResolvable|EcsDaemonDeploymentConfigurationAlarms AlarmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---

##### `BakeTimeInMinutesInput`<sup>Optional</sup> <a name="BakeTimeInMinutesInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput"></a>

```csharp
public double BakeTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `DrainPercentInput`<sup>Optional</sup> <a name="DrainPercentInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput"></a>

```csharp
public double DrainPercentInput { get; }
```

- *Type:* double

---

##### `BakeTimeInMinutes`<sup>Required</sup> <a name="BakeTimeInMinutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```csharp
public double BakeTimeInMinutes { get; }
```

- *Type:* double

---

##### `DrainPercent`<sup>Required</sup> <a name="DrainPercent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent"></a>

```csharp
public double DrainPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonDeploymentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---


### EcsDaemonTagsList <a name="EcsDaemonTagsList" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get"></a>

```csharp
private EcsDaemonTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>[]

---


### EcsDaemonTagsOutputReference <a name="EcsDaemonTagsOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsDaemonTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>

---



