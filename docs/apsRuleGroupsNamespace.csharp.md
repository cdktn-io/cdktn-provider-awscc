# `apsRuleGroupsNamespace` Submodule <a name="`apsRuleGroupsNamespace` Submodule" id="@cdktn/provider-awscc.apsRuleGroupsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsRuleGroupsNamespace <a name="ApsRuleGroupsNamespace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace awscc_aps_rule_groups_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsRuleGroupsNamespace(Construct Scope, string Id, ApsRuleGroupsNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig">ApsRuleGroupsNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig">ApsRuleGroupsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags"></a>

```csharp
private void PutTags(IResolvable|ApsRuleGroupsNamespaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApsRuleGroupsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsRuleGroupsNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsRuleGroupsNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsRuleGroupsNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsRuleGroupsNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApsRuleGroupsNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApsRuleGroupsNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApsRuleGroupsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApsRuleGroupsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList">ApsRuleGroupsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspaceInput">WorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tags"></a>

```csharp
public ApsRuleGroupsNamespaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList">ApsRuleGroupsNamespaceTagsList</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tagsInput"></a>

```csharp
public IResolvable|ApsRuleGroupsNamespaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspaceInput"></a>

```csharp
public string WorkspaceInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsRuleGroupsNamespaceConfig <a name="ApsRuleGroupsNamespaceConfig" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsRuleGroupsNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Data,
    string Name,
    string Workspace,
    IResolvable|ApsRuleGroupsNamespaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.data">Data</a></code> | <code>string</code> | The RuleGroupsNamespace data. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.name">Name</a></code> | <code>string</code> | The RuleGroupsNamespace name. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.workspace">Workspace</a></code> | <code>string</code> | Required to identify a specific APS Workspace associated with this RuleGroupsNamespace. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The RuleGroupsNamespace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#data ApsRuleGroupsNamespace#data}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The RuleGroupsNamespace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#name ApsRuleGroupsNamespace#name}

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.workspace"></a>

```csharp
public string Workspace { get; set; }
```

- *Type:* string

Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#workspace ApsRuleGroupsNamespace#workspace}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.tags"></a>

```csharp
public IResolvable|ApsRuleGroupsNamespaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#tags ApsRuleGroupsNamespace#tags}

---

### ApsRuleGroupsNamespaceTags <a name="ApsRuleGroupsNamespaceTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsRuleGroupsNamespaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#key ApsRuleGroupsNamespace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/aps_rule_groups_namespace#value ApsRuleGroupsNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsRuleGroupsNamespaceTagsList <a name="ApsRuleGroupsNamespaceTagsList" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsRuleGroupsNamespaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get"></a>

```csharp
private ApsRuleGroupsNamespaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApsRuleGroupsNamespaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

---


### ApsRuleGroupsNamespaceTagsOutputReference <a name="ApsRuleGroupsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsRuleGroupsNamespaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsRuleGroupsNamespaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>

---



