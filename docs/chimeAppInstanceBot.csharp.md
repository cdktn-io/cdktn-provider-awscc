# `chimeAppInstanceBot` Submodule <a name="`chimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.chimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstanceBot <a name="ChimeAppInstanceBot" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBot(Construct Scope, string Id, ChimeAppInstanceBotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig">ChimeAppInstanceBotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig">ChimeAppInstanceBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration"></a>

```csharp
private void PutConfiguration(ChimeAppInstanceBotConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags"></a>

```csharp
private void PutTags(IResolvable|ChimeAppInstanceBotTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

---

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeAppInstanceBot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeAppInstanceBot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeAppInstanceBot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeAppInstanceBot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeAppInstanceBot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn">AppInstanceBotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp">CreatedTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput">AppInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppInstanceBotArn`<sup>Required</sup> <a name="AppInstanceBotArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn"></a>

```csharp
public string AppInstanceBotArn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration"></a>

```csharp
public ChimeAppInstanceBotConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp"></a>

```csharp
public double CreatedTimestamp { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```csharp
public double LastUpdatedTimestamp { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags"></a>

```csharp
public ChimeAppInstanceBotTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a>

---

##### `AppInstanceArnInput`<sup>Optional</sup> <a name="AppInstanceArnInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput"></a>

```csharp
public string AppInstanceArnInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput"></a>

```csharp
public IResolvable|ChimeAppInstanceBotConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput"></a>

```csharp
public IResolvable|ChimeAppInstanceBotTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceBotConfig <a name="ChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppInstanceArn,
    ChimeAppInstanceBotConfiguration Configuration,
    string Metadata = null,
    string Name = null,
    IResolvable|ChimeAppInstanceBotTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | The ARN of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | A structure that contains configuration data. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata">Metadata</a></code> | <code>string</code> | The metadata of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name">Name</a></code> | <code>string</code> | The name of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]</code> | The tags assigned to the AppInstanceBot. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; set; }
```

- *Type:* string

The ARN of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#app_instance_arn ChimeAppInstanceBot#app_instance_arn}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration"></a>

```csharp
public ChimeAppInstanceBotConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

A structure that contains configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#configuration ChimeAppInstanceBot#configuration}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

The metadata of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#metadata ChimeAppInstanceBot#metadata}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#name ChimeAppInstanceBot#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags"></a>

```csharp
public IResolvable|ChimeAppInstanceBotTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

The tags assigned to the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#tags ChimeAppInstanceBot#tags}

---

### ChimeAppInstanceBotConfiguration <a name="ChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfiguration {
    ChimeAppInstanceBotConfigurationLex Lex
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex">Lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | The configuration for an Amazon Lex V2 bot. |

---

##### `Lex`<sup>Required</sup> <a name="Lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex"></a>

```csharp
public ChimeAppInstanceBotConfigurationLex Lex { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

The configuration for an Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#lex ChimeAppInstanceBot#lex}

---

### ChimeAppInstanceBotConfigurationLex <a name="ChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfigurationLex {
    string LexBotAliasArn,
    string LocaleId,
    ChimeAppInstanceBotConfigurationLexInvokedBy InvokedBy = null,
    string RespondsTo = null,
    string WelcomeIntent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn">LexBotAliasArn</a></code> | <code>string</code> | The ARN of the Amazon Lex V2 bot's alias. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId">LocaleId</a></code> | <code>string</code> | Identifies the Amazon Lex V2 bot's language and locale. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy">InvokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | Specifies the type of message that triggers a bot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo">RespondsTo</a></code> | <code>string</code> | Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent">WelcomeIntent</a></code> | <code>string</code> | The name of the welcome intent configured in the Amazon Lex V2 bot. |

---

##### `LexBotAliasArn`<sup>Required</sup> <a name="LexBotAliasArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn"></a>

```csharp
public string LexBotAliasArn { get; set; }
```

- *Type:* string

The ARN of the Amazon Lex V2 bot's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#lex_bot_alias_arn ChimeAppInstanceBot#lex_bot_alias_arn}

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId"></a>

```csharp
public string LocaleId { get; set; }
```

- *Type:* string

Identifies the Amazon Lex V2 bot's language and locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#locale_id ChimeAppInstanceBot#locale_id}

---

##### `InvokedBy`<sup>Optional</sup> <a name="InvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy"></a>

```csharp
public ChimeAppInstanceBotConfigurationLexInvokedBy InvokedBy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

Specifies the type of message that triggers a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#invoked_by ChimeAppInstanceBot#invoked_by}

---

##### `RespondsTo`<sup>Optional</sup> <a name="RespondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo"></a>

```csharp
public string RespondsTo { get; set; }
```

- *Type:* string

Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#responds_to ChimeAppInstanceBot#responds_to}

---

##### `WelcomeIntent`<sup>Optional</sup> <a name="WelcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent"></a>

```csharp
public string WelcomeIntent { get; set; }
```

- *Type:* string

The name of the welcome intent configured in the Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#welcome_intent ChimeAppInstanceBot#welcome_intent}

---

### ChimeAppInstanceBotConfigurationLexInvokedBy <a name="ChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfigurationLexInvokedBy {
    string StandardMessages = null,
    string TargetedMessages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages">StandardMessages</a></code> | <code>string</code> | Sets standard messages as the bot trigger. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages">TargetedMessages</a></code> | <code>string</code> | Sets targeted messages as the bot trigger. |

---

##### `StandardMessages`<sup>Optional</sup> <a name="StandardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages"></a>

```csharp
public string StandardMessages { get; set; }
```

- *Type:* string

Sets standard messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#standard_messages ChimeAppInstanceBot#standard_messages}

---

##### `TargetedMessages`<sup>Optional</sup> <a name="TargetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages"></a>

```csharp
public string TargetedMessages { get; set; }
```

- *Type:* string

Sets targeted messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#targeted_messages ChimeAppInstanceBot#targeted_messages}

---

### ChimeAppInstanceBotTags <a name="ChimeAppInstanceBotTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key">Key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value">Value</a></code> | <code>string</code> | The value in a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#key ChimeAppInstanceBot#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#value ChimeAppInstanceBot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="ChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfigurationLexInvokedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages">ResetStandardMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages">ResetTargetedMessages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStandardMessages` <a name="ResetStandardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages"></a>

```csharp
private void ResetStandardMessages()
```

##### `ResetTargetedMessages` <a name="ResetTargetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages"></a>

```csharp
private void ResetTargetedMessages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput">StandardMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput">TargetedMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">StandardMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">TargetedMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardMessagesInput`<sup>Optional</sup> <a name="StandardMessagesInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput"></a>

```csharp
public string StandardMessagesInput { get; }
```

- *Type:* string

---

##### `TargetedMessagesInput`<sup>Optional</sup> <a name="TargetedMessagesInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput"></a>

```csharp
public string TargetedMessagesInput { get; }
```

- *Type:* string

---

##### `StandardMessages`<sup>Required</sup> <a name="StandardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```csharp
public string StandardMessages { get; }
```

- *Type:* string

---

##### `TargetedMessages`<sup>Required</sup> <a name="TargetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```csharp
public string TargetedMessages { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeAppInstanceBotConfigurationLexInvokedBy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### ChimeAppInstanceBotConfigurationLexOutputReference <a name="ChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfigurationLexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy">PutInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy">ResetInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo">ResetRespondsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent">ResetWelcomeIntent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvokedBy` <a name="PutInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy"></a>

```csharp
private void PutInvokedBy(ChimeAppInstanceBotConfigurationLexInvokedBy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `ResetInvokedBy` <a name="ResetInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy"></a>

```csharp
private void ResetInvokedBy()
```

##### `ResetRespondsTo` <a name="ResetRespondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo"></a>

```csharp
private void ResetRespondsTo()
```

##### `ResetWelcomeIntent` <a name="ResetWelcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent"></a>

```csharp
private void ResetWelcomeIntent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">InvokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput">InvokedByInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput">LexBotAliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput">LocaleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput">RespondsToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput">WelcomeIntentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">LexBotAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">LocaleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">RespondsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">WelcomeIntent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvokedBy`<sup>Required</sup> <a name="InvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```csharp
public ChimeAppInstanceBotConfigurationLexInvokedByOutputReference InvokedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `InvokedByInput`<sup>Optional</sup> <a name="InvokedByInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput"></a>

```csharp
public IResolvable|ChimeAppInstanceBotConfigurationLexInvokedBy InvokedByInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `LexBotAliasArnInput`<sup>Optional</sup> <a name="LexBotAliasArnInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput"></a>

```csharp
public string LexBotAliasArnInput { get; }
```

- *Type:* string

---

##### `LocaleIdInput`<sup>Optional</sup> <a name="LocaleIdInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput"></a>

```csharp
public string LocaleIdInput { get; }
```

- *Type:* string

---

##### `RespondsToInput`<sup>Optional</sup> <a name="RespondsToInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput"></a>

```csharp
public string RespondsToInput { get; }
```

- *Type:* string

---

##### `WelcomeIntentInput`<sup>Optional</sup> <a name="WelcomeIntentInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput"></a>

```csharp
public string WelcomeIntentInput { get; }
```

- *Type:* string

---

##### `LexBotAliasArn`<sup>Required</sup> <a name="LexBotAliasArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```csharp
public string LexBotAliasArn { get; }
```

- *Type:* string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```csharp
public string LocaleId { get; }
```

- *Type:* string

---

##### `RespondsTo`<sup>Required</sup> <a name="RespondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```csharp
public string RespondsTo { get; }
```

- *Type:* string

---

##### `WelcomeIntent`<sup>Required</sup> <a name="WelcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```csharp
public string WelcomeIntent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeAppInstanceBotConfigurationLex InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


### ChimeAppInstanceBotConfigurationOutputReference <a name="ChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex">PutLex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLex` <a name="PutLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex"></a>

```csharp
private void PutLex(ChimeAppInstanceBotConfigurationLex Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex">Lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput">LexInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lex`<sup>Required</sup> <a name="Lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```csharp
public ChimeAppInstanceBotConfigurationLexOutputReference Lex { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `LexInput`<sup>Optional</sup> <a name="LexInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput"></a>

```csharp
public IResolvable|ChimeAppInstanceBotConfigurationLex LexInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeAppInstanceBotConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---


### ChimeAppInstanceBotTagsList <a name="ChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get"></a>

```csharp
private ChimeAppInstanceBotTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue"></a>

```csharp
public IResolvable|ChimeAppInstanceBotTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>[]

---


### ChimeAppInstanceBotTagsOutputReference <a name="ChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeAppInstanceBotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeAppInstanceBotTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>

---



