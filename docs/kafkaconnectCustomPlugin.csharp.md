# `kafkaconnectCustomPlugin` Submodule <a name="`kafkaconnectCustomPlugin` Submodule" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectCustomPlugin <a name="KafkaconnectCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPlugin(Construct Scope, string Id, KafkaconnectCustomPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig">KafkaconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig">KafkaconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation"></a>

```csharp
private void PutLocation(KafkaconnectCustomPluginLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags"></a>

```csharp
private void PutTags(IResolvable|KafkaconnectCustomPluginTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectCustomPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectCustomPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectCustomPlugin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KafkaconnectCustomPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KafkaconnectCustomPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KafkaconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn">CustomPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription">FileDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn"></a>

```csharp
public string CustomPluginArn { get; }
```

- *Type:* string

---

##### `FileDescription`<sup>Required</sup> <a name="FileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription"></a>

```csharp
public KafkaconnectCustomPluginFileDescriptionOutputReference FileDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location"></a>

```csharp
public KafkaconnectCustomPluginLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags"></a>

```csharp
public KafkaconnectCustomPluginTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectCustomPluginConfig <a name="KafkaconnectCustomPluginConfig" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ContentType,
    KafkaconnectCustomPluginLocation Location,
    string Name,
    string Description = null,
    IResolvable|KafkaconnectCustomPluginTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType">ContentType</a></code> | <code>string</code> | The type of the plugin file. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | Information about the location of a custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name">Name</a></code> | <code>string</code> | The name of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description">Description</a></code> | <code>string</code> | A summary description of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

The type of the plugin file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#content_type KafkaconnectCustomPlugin#content_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location"></a>

```csharp
public KafkaconnectCustomPluginLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

Information about the location of a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#location KafkaconnectCustomPlugin#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#name KafkaconnectCustomPlugin#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A summary description of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#description KafkaconnectCustomPlugin#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#tags KafkaconnectCustomPlugin#tags}

---

### KafkaconnectCustomPluginFileDescription <a name="KafkaconnectCustomPluginFileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginFileDescription {

};
```


### KafkaconnectCustomPluginLocation <a name="KafkaconnectCustomPluginLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginLocation {
    KafkaconnectCustomPluginLocationS3Location S3Location
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3. |

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location"></a>

```csharp
public KafkaconnectCustomPluginLocationS3Location S3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#s3_location KafkaconnectCustomPlugin#s3_location}

---

### KafkaconnectCustomPluginLocationS3Location <a name="KafkaconnectCustomPluginLocationS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginLocationS3Location {
    string BucketArn,
    string FileKey,
    string ObjectVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn">BucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey">FileKey</a></code> | <code>string</code> | The file key for an object in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | The version of an object in an S3 bucket. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#bucket_arn KafkaconnectCustomPlugin#bucket_arn}

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey"></a>

```csharp
public string FileKey { get; set; }
```

- *Type:* string

The file key for an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#file_key KafkaconnectCustomPlugin#file_key}

---

##### `ObjectVersion`<sup>Optional</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; set; }
```

- *Type:* string

The version of an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#object_version KafkaconnectCustomPlugin#object_version}

---

### KafkaconnectCustomPluginTags <a name="KafkaconnectCustomPluginTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#key KafkaconnectCustomPlugin#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kafkaconnect_custom_plugin#value KafkaconnectCustomPlugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectCustomPluginFileDescriptionOutputReference <a name="KafkaconnectCustomPluginFileDescriptionOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginFileDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5">FileMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize">FileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileMd5`<sup>Required</sup> <a name="FileMd5" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5"></a>

```csharp
public string FileMd5 { get; }
```

- *Type:* string

---

##### `FileSize`<sup>Required</sup> <a name="FileSize" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize"></a>

```csharp
public double FileSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue"></a>

```csharp
public KafkaconnectCustomPluginFileDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a>

---


### KafkaconnectCustomPluginLocationOutputReference <a name="KafkaconnectCustomPluginLocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location"></a>

```csharp
private void PutS3Location(KafkaconnectCustomPluginLocationS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location"></a>

```csharp
public KafkaconnectCustomPluginLocationS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginLocationS3Location S3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---


### KafkaconnectCustomPluginLocationS3LocationOutputReference <a name="KafkaconnectCustomPluginLocationS3LocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginLocationS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion">ResetObjectVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectVersion` <a name="ResetObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion"></a>

```csharp
private void ResetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput">FileKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput">ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey">FileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `FileKeyInput`<sup>Optional</sup> <a name="FileKeyInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput"></a>

```csharp
public string FileKeyInput { get; }
```

- *Type:* string

---

##### `ObjectVersionInput`<sup>Optional</sup> <a name="ObjectVersionInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput"></a>

```csharp
public string ObjectVersionInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey"></a>

```csharp
public string FileKey { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginLocationS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---


### KafkaconnectCustomPluginTagsList <a name="KafkaconnectCustomPluginTagsList" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get"></a>

```csharp
private KafkaconnectCustomPluginTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

---


### KafkaconnectCustomPluginTagsOutputReference <a name="KafkaconnectCustomPluginTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KafkaconnectCustomPluginTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KafkaconnectCustomPluginTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>

---



