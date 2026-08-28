# `medialiveEventBridgeRuleTemplate` Submodule <a name="`medialiveEventBridgeRuleTemplate` Submodule" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveEventBridgeRuleTemplate <a name="MedialiveEventBridgeRuleTemplate" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template awscc_medialive_event_bridge_rule_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveEventBridgeRuleTemplate(Construct Scope, string Id, MedialiveEventBridgeRuleTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig">MedialiveEventBridgeRuleTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig">MedialiveEventBridgeRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.putEventTargets">PutEventTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetEventTargets">ResetEventTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetGroupIdentifier">ResetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTargets` <a name="PutEventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.putEventTargets"></a>

```csharp
private void PutEventTargets(IResolvable|MedialiveEventBridgeRuleTemplateEventTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.putEventTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventTargets` <a name="ResetEventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetEventTargets"></a>

```csharp
private void ResetEventTargets()
```

##### `ResetGroupIdentifier` <a name="ResetGroupIdentifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetGroupIdentifier"></a>

```csharp
private void ResetGroupIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveEventBridgeRuleTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveEventBridgeRuleTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveEventBridgeRuleTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveEventBridgeRuleTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveEventBridgeRuleTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveEventBridgeRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveEventBridgeRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId">EventBridgeRuleTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargets">EventTargets</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList">MedialiveEventBridgeRuleTemplateEventTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargetsInput">EventTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EventBridgeRuleTemplateId`<sup>Required</sup> <a name="EventBridgeRuleTemplateId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId"></a>

```csharp
public string EventBridgeRuleTemplateId { get; }
```

- *Type:* string

---

##### `EventTargets`<sup>Required</sup> <a name="EventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargets"></a>

```csharp
public MedialiveEventBridgeRuleTemplateEventTargetsList EventTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList">MedialiveEventBridgeRuleTemplateEventTargetsList</a>

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventTargetsInput`<sup>Optional</sup> <a name="EventTargetsInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargetsInput"></a>

```csharp
public IResolvable|MedialiveEventBridgeRuleTemplateEventTargets[] EventTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifierInput"></a>

```csharp
public string GroupIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveEventBridgeRuleTemplateConfig <a name="MedialiveEventBridgeRuleTemplateConfig" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveEventBridgeRuleTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EventType,
    string Name,
    string Description = null,
    IResolvable|MedialiveEventBridgeRuleTemplateEventTargets[] EventTargets = null,
    string GroupIdentifier = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventType">EventType</a></code> | <code>string</code> | The type of event to match with the rule. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.name">Name</a></code> | <code>string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.description">Description</a></code> | <code>string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventTargets">EventTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]</code> | Placeholder documentation for __listOfEventBridgeRuleTemplateTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | An eventbridge rule template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Represents the tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

The type of event to match with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#event_type MedialiveEventBridgeRuleTemplate#event_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#name MedialiveEventBridgeRuleTemplate#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#description MedialiveEventBridgeRuleTemplate#description}

---

##### `EventTargets`<sup>Optional</sup> <a name="EventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventTargets"></a>

```csharp
public IResolvable|MedialiveEventBridgeRuleTemplateEventTargets[] EventTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]

Placeholder documentation for __listOfEventBridgeRuleTemplateTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#event_targets MedialiveEventBridgeRuleTemplate#event_targets}

---

##### `GroupIdentifier`<sup>Optional</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; set; }
```

- *Type:* string

An eventbridge rule template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#group_identifier MedialiveEventBridgeRuleTemplate#group_identifier}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#tags MedialiveEventBridgeRuleTemplate#tags}

---

### MedialiveEventBridgeRuleTemplateEventTargets <a name="MedialiveEventBridgeRuleTemplateEventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveEventBridgeRuleTemplateEventTargets {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets.property.arn">Arn</a></code> | <code>string</code> | Target ARNs must be either an SNS topic or CloudWatch log group. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Target ARNs must be either an SNS topic or CloudWatch log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_event_bridge_rule_template#arn MedialiveEventBridgeRuleTemplate#arn}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveEventBridgeRuleTemplateEventTargetsList <a name="MedialiveEventBridgeRuleTemplateEventTargetsList" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveEventBridgeRuleTemplateEventTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.get"></a>

```csharp
private MedialiveEventBridgeRuleTemplateEventTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveEventBridgeRuleTemplateEventTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>[]

---


### MedialiveEventBridgeRuleTemplateEventTargetsOutputReference <a name="MedialiveEventBridgeRuleTemplateEventTargetsOutputReference" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveEventBridgeRuleTemplateEventTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveEventBridgeRuleTemplateEventTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets">MedialiveEventBridgeRuleTemplateEventTargets</a>

---



