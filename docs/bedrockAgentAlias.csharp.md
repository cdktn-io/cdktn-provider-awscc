# `bedrockAgentAlias` Submodule <a name="`bedrockAgentAlias` Submodule" id="@cdktn/provider-awscc.bedrockAgentAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgentAlias <a name="BedrockAgentAlias" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias awscc_bedrock_agent_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAlias(Construct Scope, string Id, BedrockAgentAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig">BedrockAgentAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig">BedrockAgentAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration">PutRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetRoutingConfiguration">ResetRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutingConfiguration` <a name="PutRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration"></a>

```csharp
private void PutRoutingConfiguration(IResolvable|BedrockAgentAliasRoutingConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRoutingConfiguration` <a name="ResetRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetRoutingConfiguration"></a>

```csharp
private void ResetRoutingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAgentAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgentAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgentAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgentAlias.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAgentAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockAgentAlias resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockAgentAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockAgentAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgentAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasArn">AgentAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasHistoryEvents">AgentAliasHistoryEvents</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList">BedrockAgentAliasAgentAliasHistoryEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasId">AgentAliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasStatus">AgentAliasStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfiguration">RoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList">BedrockAgentAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasNameInput">AgentAliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfigurationInput">RoutingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasName">AgentAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentAliasArn`<sup>Required</sup> <a name="AgentAliasArn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasArn"></a>

```csharp
public string AgentAliasArn { get; }
```

- *Type:* string

---

##### `AgentAliasHistoryEvents`<sup>Required</sup> <a name="AgentAliasHistoryEvents" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasHistoryEvents"></a>

```csharp
public BedrockAgentAliasAgentAliasHistoryEventsList AgentAliasHistoryEvents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList">BedrockAgentAliasAgentAliasHistoryEventsList</a>

---

##### `AgentAliasId`<sup>Required</sup> <a name="AgentAliasId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasId"></a>

```csharp
public string AgentAliasId { get; }
```

- *Type:* string

---

##### `AgentAliasStatus`<sup>Required</sup> <a name="AgentAliasStatus" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasStatus"></a>

```csharp
public string AgentAliasStatus { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoutingConfiguration`<sup>Required</sup> <a name="RoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfiguration"></a>

```csharp
public BedrockAgentAliasRoutingConfigurationList RoutingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList">BedrockAgentAliasRoutingConfigurationList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AgentAliasNameInput`<sup>Optional</sup> <a name="AgentAliasNameInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasNameInput"></a>

```csharp
public string AgentAliasNameInput { get; }
```

- *Type:* string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RoutingConfigurationInput`<sup>Optional</sup> <a name="RoutingConfigurationInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.routingConfigurationInput"></a>

```csharp
public IResolvable|BedrockAgentAliasRoutingConfiguration[] RoutingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgentAliasName`<sup>Required</sup> <a name="AgentAliasName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentAliasName"></a>

```csharp
public string AgentAliasName { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentAliasAgentAliasHistoryEvents <a name="BedrockAgentAliasAgentAliasHistoryEvents" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasAgentAliasHistoryEvents {

};
```


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration {

};
```


### BedrockAgentAliasConfig <a name="BedrockAgentAliasConfig" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentAliasName,
    string AgentId,
    string Description = null,
    IResolvable|BedrockAgentAliasRoutingConfiguration[] RoutingConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentAliasName">AgentAliasName</a></code> | <code>string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentId">AgentId</a></code> | <code>string</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.description">Description</a></code> | <code>string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.routingConfiguration">RoutingConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]</code> | Routing configuration for an Agent alias. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentAliasName`<sup>Required</sup> <a name="AgentAliasName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentAliasName"></a>

```csharp
public string AgentAliasName { get; set; }
```

- *Type:* string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#agent_alias_name BedrockAgentAlias#agent_alias_name}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#agent_id BedrockAgentAlias#agent_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#description BedrockAgentAlias#description}

---

##### `RoutingConfiguration`<sup>Optional</sup> <a name="RoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.routingConfiguration"></a>

```csharp
public IResolvable|BedrockAgentAliasRoutingConfiguration[] RoutingConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

Routing configuration for an Agent alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#routing_configuration BedrockAgentAlias#routing_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#tags BedrockAgentAlias#tags}

---

### BedrockAgentAliasRoutingConfiguration <a name="BedrockAgentAliasRoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasRoutingConfiguration {
    string AgentVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.property.agentVersion">AgentVersion</a></code> | <code>string</code> | Agent Version. |

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration.property.agentVersion"></a>

```csharp
public string AgentVersion { get; set; }
```

- *Type:* string

Agent Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_agent_alias#agent_version BedrockAgentAlias#agent_version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentAliasAgentAliasHistoryEventsList <a name="BedrockAgentAliasAgentAliasHistoryEventsList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasAgentAliasHistoryEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get"></a>

```csharp
private BedrockAgentAliasAgentAliasHistoryEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockAgentAliasAgentAliasHistoryEventsOutputReference <a name="BedrockAgentAliasAgentAliasHistoryEventsOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasAgentAliasHistoryEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.routingConfiguration">RoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents">BedrockAgentAliasAgentAliasHistoryEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `RoutingConfiguration`<sup>Required</sup> <a name="RoutingConfiguration" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.routingConfiguration"></a>

```csharp
public BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList RoutingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsOutputReference.property.internalValue"></a>

```csharp
public BedrockAgentAliasAgentAliasHistoryEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEvents">BedrockAgentAliasAgentAliasHistoryEvents</a>

---


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get"></a>

```csharp
private BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference <a name="BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfigurationOutputReference.property.internalValue"></a>

```csharp
public BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration">BedrockAgentAliasAgentAliasHistoryEventsRoutingConfiguration</a>

---


### BedrockAgentAliasRoutingConfigurationList <a name="BedrockAgentAliasRoutingConfigurationList" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasRoutingConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get"></a>

```csharp
private BedrockAgentAliasRoutingConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentAliasRoutingConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>[]

---


### BedrockAgentAliasRoutingConfigurationOutputReference <a name="BedrockAgentAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAgentAliasRoutingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.resetAgentVersion"></a>

```csharp
private void ResetAgentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput">AgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput"></a>

```csharp
public string AgentVersionInput { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAgentAliasRoutingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAgentAlias.BedrockAgentAliasRoutingConfiguration">BedrockAgentAliasRoutingConfiguration</a>

---



