# `ivschatLoggingConfiguration` Submodule <a name="`ivschatLoggingConfiguration` Submodule" id="@cdktn/provider-awscc.ivschatLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatLoggingConfiguration <a name="IvschatLoggingConfiguration" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration awscc_ivschat_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfiguration(Construct Scope, string Id, IvschatLoggingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig">IvschatLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig">IvschatLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration"></a>

```csharp
private void PutDestinationConfiguration(IvschatLoggingConfigurationDestinationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|IvschatLoggingConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IvschatLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvschatLoggingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvschatLoggingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvschatLoggingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvschatLoggingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IvschatLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvschatLoggingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvschatLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IvschatLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference">IvschatLoggingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.loggingConfigurationId">LoggingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList">IvschatLoggingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfiguration"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationOutputReference DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference">IvschatLoggingConfigurationDestinationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfigurationId`<sup>Required</sup> <a name="LoggingConfigurationId" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.loggingConfigurationId"></a>

```csharp
public string LoggingConfigurationId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tags"></a>

```csharp
public IvschatLoggingConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList">IvschatLoggingConfigurationTagsList</a>

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfigurationInput"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfiguration DestinationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatLoggingConfigurationConfig <a name="IvschatLoggingConfigurationConfig" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IvschatLoggingConfigurationDestinationConfiguration DestinationConfiguration,
    string Name = null,
    IResolvable|IvschatLoggingConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | Destination configuration for IVS Chat logging. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name of the logging configuration. The value does not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.destinationConfiguration"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfiguration DestinationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

Destination configuration for IVS Chat logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#destination_configuration IvschatLoggingConfiguration#destination_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the logging configuration. The value does not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}

---

### IvschatLoggingConfigurationDestinationConfiguration <a name="IvschatLoggingConfigurationDestinationConfiguration" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfiguration {
    IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs CloudwatchLogs = null,
    IvschatLoggingConfigurationDestinationConfigurationFirehose Firehose = null,
    IvschatLoggingConfigurationDestinationConfigurationS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | CloudWatch destination configuration for IVS Chat logging. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | Kinesis Firehose destination configuration for IVS Chat logging. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | S3 destination configuration for IVS Chat logging. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.cloudwatchLogs"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

CloudWatch destination configuration for IVS Chat logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#cloudwatch_logs IvschatLoggingConfiguration#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.firehose"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

Kinesis Firehose destination configuration for IVS Chat logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#firehose IvschatLoggingConfiguration#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.s3"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

S3 destination configuration for IVS Chat logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#s3 IvschatLoggingConfiguration#s3}

---

### IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs <a name="IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs {
    string LogGroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Name of the Amazon CloudWatch Logs log group where chat activity will be logged. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Name of the Amazon CloudWatch Logs log group where chat activity will be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}

---

### IvschatLoggingConfigurationDestinationConfigurationFirehose <a name="IvschatLoggingConfigurationDestinationConfigurationFirehose" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationFirehose {
    string DeliveryStreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>string</code> | Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged. |

---

##### `DeliveryStreamName`<sup>Optional</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.property.deliveryStreamName"></a>

```csharp
public string DeliveryStreamName { get; set; }
```

- *Type:* string

Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}

---

### IvschatLoggingConfigurationDestinationConfigurationS3 <a name="IvschatLoggingConfigurationDestinationConfigurationS3" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationS3 {
    string BucketName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.property.bucketName">BucketName</a></code> | <code>string</code> | Name of the Amazon S3 bucket where chat activity will be logged. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Name of the Amazon S3 bucket where chat activity will be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}

---

### IvschatLoggingConfigurationTags <a name="IvschatLoggingConfigurationTags" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#key IvschatLoggingConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_logging_configuration#value IvschatLoggingConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---


### IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resetDeliveryStreamName">ResetDeliveryStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStreamName` <a name="ResetDeliveryStreamName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resetDeliveryStreamName"></a>

```csharp
private void ResetDeliveryStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamNameInput">DeliveryStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamNameInput`<sup>Optional</sup> <a name="DeliveryStreamNameInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```csharp
public string DeliveryStreamNameInput { get; }
```

- *Type:* string

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName"></a>

```csharp
public string DeliveryStreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfigurationFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---


### IvschatLoggingConfigurationDestinationConfigurationOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(IvschatLoggingConfigurationDestinationConfigurationFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3"></a>

```csharp
private void PutS3(IvschatLoggingConfigurationDestinationConfigurationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference">IvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference">IvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfigurationFirehose FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3Input"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfigurationS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---


### IvschatLoggingConfigurationDestinationConfigurationS3OutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationS3OutputReference" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationDestinationConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationDestinationConfigurationS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---


### IvschatLoggingConfigurationTagsList <a name="IvschatLoggingConfigurationTagsList" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.get"></a>

```csharp
private IvschatLoggingConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>[]

---


### IvschatLoggingConfigurationTagsOutputReference <a name="IvschatLoggingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvschatLoggingConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvschatLoggingConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatLoggingConfiguration.IvschatLoggingConfigurationTags">IvschatLoggingConfigurationTags</a>

---



