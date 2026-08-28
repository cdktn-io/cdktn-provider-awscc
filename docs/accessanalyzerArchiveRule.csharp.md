# `accessanalyzerArchiveRule` Submodule <a name="`accessanalyzerArchiveRule` Submodule" id="@cdktn/provider-awscc.accessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerArchiveRule <a name="AccessanalyzerArchiveRule" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AccessanalyzerArchiveRule(Construct Scope, string Id, AccessanalyzerArchiveRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig">AccessanalyzerArchiveRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig">AccessanalyzerArchiveRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter">PutFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter"></a>

```csharp
private void PutFilter(IResolvable|System.Collections.Generic.IDictionary<string, AccessanalyzerArchiveRuleFilter> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AccessanalyzerArchiveRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AccessanalyzerArchiveRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AccessanalyzerArchiveRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AccessanalyzerArchiveRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessanalyzerArchiveRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessanalyzerArchiveRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AccessanalyzerArchiveRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap">AccessanalyzerArchiveRuleFilterMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput">AnalyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName">AnalyzerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter"></a>

```csharp
public AccessanalyzerArchiveRuleFilterMap Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap">AccessanalyzerArchiveRuleFilterMap</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AnalyzerNameInput`<sup>Optional</sup> <a name="AnalyzerNameInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput"></a>

```csharp
public string AnalyzerNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AccessanalyzerArchiveRuleFilter> FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>>

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName"></a>

```csharp
public string AnalyzerName { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerArchiveRuleConfig <a name="AccessanalyzerArchiveRuleConfig" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AccessanalyzerArchiveRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AnalyzerName,
    IResolvable|System.Collections.Generic.IDictionary<string, AccessanalyzerArchiveRuleFilter> Filter,
    string RuleName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName">AnalyzerName</a></code> | <code>string</code> | The name of the analyzer for the archive rule. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>></code> | The criteria for the archive rule. A map of filter criteria property names to their criterion values. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | The name of the archive rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName"></a>

```csharp
public string AnalyzerName { get; set; }
```

- *Type:* string

The name of the analyzer for the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AccessanalyzerArchiveRuleFilter> Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>>

The criteria for the archive rule. A map of filter criteria property names to their criterion values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The name of the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}

---

### AccessanalyzerArchiveRuleFilter <a name="AccessanalyzerArchiveRuleFilter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AccessanalyzerArchiveRuleFilter {
    string[] Contains = null,
    string[] Eq = null,
    bool|IResolvable Exists = null,
    string[] Neq = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains">Contains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq">Eq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists">Exists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq">Neq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains"></a>

```csharp
public string[] Contains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}.

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq"></a>

```csharp
public string[] Eq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}.

---

##### `Exists`<sup>Optional</sup> <a name="Exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists"></a>

```csharp
public bool|IResolvable Exists { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}.

---

##### `Neq`<sup>Optional</sup> <a name="Neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq"></a>

```csharp
public string[] Neq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerArchiveRuleFilterMap <a name="AccessanalyzerArchiveRuleFilterMap" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AccessanalyzerArchiveRuleFilterMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get"></a>

```csharp
private AccessanalyzerArchiveRuleFilterOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AccessanalyzerArchiveRuleFilter> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>>

---


### AccessanalyzerArchiveRuleFilterOutputReference <a name="AccessanalyzerArchiveRuleFilterOutputReference" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AccessanalyzerArchiveRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists">ResetExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq">ResetNeq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains"></a>

```csharp
private void ResetContains()
```

##### `ResetEq` <a name="ResetEq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq"></a>

```csharp
private void ResetEq()
```

##### `ResetExists` <a name="ResetExists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists"></a>

```csharp
private void ResetExists()
```

##### `ResetNeq` <a name="ResetNeq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq"></a>

```csharp
private void ResetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput">ContainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput">EqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput">ExistsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput">NeqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains">Contains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq">Eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists">Exists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq">Neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput"></a>

```csharp
public string[] ContainsInput { get; }
```

- *Type:* string[]

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput"></a>

```csharp
public string[] EqInput { get; }
```

- *Type:* string[]

---

##### `ExistsInput`<sup>Optional</sup> <a name="ExistsInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput"></a>

```csharp
public bool|IResolvable ExistsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NeqInput`<sup>Optional</sup> <a name="NeqInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput"></a>

```csharp
public string[] NeqInput { get; }
```

- *Type:* string[]

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```csharp
public string[] Contains { get; }
```

- *Type:* string[]

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```csharp
public string[] Eq { get; }
```

- *Type:* string[]

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```csharp
public bool|IResolvable Exists { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```csharp
public string[] Neq { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccessanalyzerArchiveRuleFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>

---



