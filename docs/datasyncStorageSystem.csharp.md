# `datasyncStorageSystem` Submodule <a name="`datasyncStorageSystem` Submodule" id="@cdktn/provider-awscc.datasyncStorageSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncStorageSystem <a name="DatasyncStorageSystem" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system awscc_datasync_storage_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystem(Construct Scope, string Id, DatasyncStorageSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig">DatasyncStorageSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig">DatasyncStorageSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration">PutServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials">PutServerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetCloudwatchLogGroupArn">ResetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetServerCredentials">ResetServerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServerConfiguration` <a name="PutServerConfiguration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration"></a>

```csharp
private void PutServerConfiguration(DatasyncStorageSystemServerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

---

##### `PutServerCredentials` <a name="PutServerCredentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials"></a>

```csharp
private void PutServerCredentials(DatasyncStorageSystemServerCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putTags"></a>

```csharp
private void PutTags(IResolvable|DatasyncStorageSystemTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]

---

##### `ResetCloudwatchLogGroupArn` <a name="ResetCloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetCloudwatchLogGroupArn"></a>

```csharp
private void ResetCloudwatchLogGroupArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetServerCredentials` <a name="ResetServerCredentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetServerCredentials"></a>

```csharp
private void ResetServerCredentials()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncStorageSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncStorageSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncStorageSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncStorageSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatasyncStorageSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncStorageSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncStorageSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncStorageSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncStorageSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connectivityStatus">ConnectivityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfiguration">ServerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference">DatasyncStorageSystemServerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentials">ServerCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference">DatasyncStorageSystemServerCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemArn">StorageSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemId">StorageSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList">DatasyncStorageSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArnsInput">AgentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfigurationInput">ServerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentialsInput">ServerCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemTypeInput">SystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArns">AgentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemType">SystemType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectivityStatus`<sup>Required</sup> <a name="ConnectivityStatus" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connectivityStatus"></a>

```csharp
public string ConnectivityStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `ServerConfiguration`<sup>Required</sup> <a name="ServerConfiguration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfiguration"></a>

```csharp
public DatasyncStorageSystemServerConfigurationOutputReference ServerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference">DatasyncStorageSystemServerConfigurationOutputReference</a>

---

##### `ServerCredentials`<sup>Required</sup> <a name="ServerCredentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentials"></a>

```csharp
public DatasyncStorageSystemServerCredentialsOutputReference ServerCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference">DatasyncStorageSystemServerCredentialsOutputReference</a>

---

##### `StorageSystemArn`<sup>Required</sup> <a name="StorageSystemArn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemArn"></a>

```csharp
public string StorageSystemArn { get; }
```

- *Type:* string

---

##### `StorageSystemId`<sup>Required</sup> <a name="StorageSystemId" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemId"></a>

```csharp
public string StorageSystemId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tags"></a>

```csharp
public DatasyncStorageSystemTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList">DatasyncStorageSystemTagsList</a>

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArnsInput"></a>

```csharp
public string[] AgentArnsInput { get; }
```

- *Type:* string[]

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArnInput"></a>

```csharp
public string CloudwatchLogGroupArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerConfigurationInput`<sup>Optional</sup> <a name="ServerConfigurationInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfigurationInput"></a>

```csharp
public IResolvable|DatasyncStorageSystemServerConfiguration ServerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

---

##### `ServerCredentialsInput`<sup>Optional</sup> <a name="ServerCredentialsInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentialsInput"></a>

```csharp
public IResolvable|DatasyncStorageSystemServerCredentials ServerCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemTypeInput"></a>

```csharp
public string SystemTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tagsInput"></a>

```csharp
public IResolvable|DatasyncStorageSystemTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArns"></a>

```csharp
public string[] AgentArns { get; }
```

- *Type:* string[]

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemType"></a>

```csharp
public string SystemType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncStorageSystemConfig <a name="DatasyncStorageSystemConfig" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AgentArns,
    DatasyncStorageSystemServerConfiguration ServerConfiguration,
    string SystemType,
    string CloudwatchLogGroupArn = null,
    string Name = null,
    DatasyncStorageSystemServerCredentials ServerCredentials = null,
    IResolvable|DatasyncStorageSystemTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.agentArns">AgentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#agent_arns DatasyncStorageSystem#agent_arns}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverConfiguration">ServerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_configuration DatasyncStorageSystem#server_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.systemType">SystemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#system_type DatasyncStorageSystem#system_type}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#cloudwatch_log_group_arn DatasyncStorageSystem#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#name DatasyncStorageSystem#name}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverCredentials">ServerCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_credentials DatasyncStorageSystem#server_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#tags DatasyncStorageSystem#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.agentArns"></a>

```csharp
public string[] AgentArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#agent_arns DatasyncStorageSystem#agent_arns}.

---

##### `ServerConfiguration`<sup>Required</sup> <a name="ServerConfiguration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverConfiguration"></a>

```csharp
public DatasyncStorageSystemServerConfiguration ServerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_configuration DatasyncStorageSystem#server_configuration}.

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.systemType"></a>

```csharp
public string SystemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#system_type DatasyncStorageSystem#system_type}.

---

##### `CloudwatchLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#cloudwatch_log_group_arn DatasyncStorageSystem#cloudwatch_log_group_arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#name DatasyncStorageSystem#name}.

---

##### `ServerCredentials`<sup>Optional</sup> <a name="ServerCredentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverCredentials"></a>

```csharp
public DatasyncStorageSystemServerCredentials ServerCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_credentials DatasyncStorageSystem#server_credentials}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.tags"></a>

```csharp
public IResolvable|DatasyncStorageSystemTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#tags DatasyncStorageSystem#tags}.

---

### DatasyncStorageSystemServerConfiguration <a name="DatasyncStorageSystemServerConfiguration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemServerConfiguration {
    string ServerHostname,
    double ServerPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverHostname">ServerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_hostname DatasyncStorageSystem#server_hostname}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverPort">ServerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_port DatasyncStorageSystem#server_port}. |

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverHostname"></a>

```csharp
public string ServerHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_hostname DatasyncStorageSystem#server_hostname}.

---

##### `ServerPort`<sup>Optional</sup> <a name="ServerPort" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverPort"></a>

```csharp
public double ServerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#server_port DatasyncStorageSystem#server_port}.

---

### DatasyncStorageSystemServerCredentials <a name="DatasyncStorageSystemServerCredentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemServerCredentials {
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#password DatasyncStorageSystem#password}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#username DatasyncStorageSystem#username}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#password DatasyncStorageSystem#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#username DatasyncStorageSystem#username}.

---

### DatasyncStorageSystemTags <a name="DatasyncStorageSystemTags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#key DatasyncStorageSystem#key}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#value DatasyncStorageSystem#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#key DatasyncStorageSystem#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_storage_system#value DatasyncStorageSystem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncStorageSystemServerConfigurationOutputReference <a name="DatasyncStorageSystemServerConfigurationOutputReference" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemServerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resetServerPort">ResetServerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerPort` <a name="ResetServerPort" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resetServerPort"></a>

```csharp
private void ResetServerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostnameInput">ServerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPortInput">ServerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostname">ServerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerHostnameInput`<sup>Optional</sup> <a name="ServerHostnameInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostnameInput"></a>

```csharp
public string ServerHostnameInput { get; }
```

- *Type:* string

---

##### `ServerPortInput`<sup>Optional</sup> <a name="ServerPortInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPortInput"></a>

```csharp
public double ServerPortInput { get; }
```

- *Type:* double

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostname"></a>

```csharp
public string ServerHostname { get; }
```

- *Type:* string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncStorageSystemServerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

---


### DatasyncStorageSystemServerCredentialsOutputReference <a name="DatasyncStorageSystemServerCredentialsOutputReference" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemServerCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncStorageSystemServerCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

---


### DatasyncStorageSystemTagsList <a name="DatasyncStorageSystemTagsList" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.get"></a>

```csharp
private DatasyncStorageSystemTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatasyncStorageSystemTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>[]

---


### DatasyncStorageSystemTagsOutputReference <a name="DatasyncStorageSystemTagsOutputReference" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatasyncStorageSystemTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatasyncStorageSystemTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>

---



