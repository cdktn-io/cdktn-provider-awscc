# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicy(Construct Scope, string Id, NetworksecuritymanagerPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList">PutAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration">PutPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList">ResetAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription">ResetPolicyDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedTemplateAndRuleList` <a name="PutAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList"></a>

```csharp
private void PutAssociatedTemplateAndRuleList(IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

---

##### `PutPolicyConfiguration` <a name="PutPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration"></a>

```csharp
private void PutPolicyConfiguration(NetworksecuritymanagerPolicyPolicyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworksecuritymanagerPolicyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

---

##### `ResetAssociatedTemplateAndRuleList` <a name="ResetAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList"></a>

```csharp
private void ResetAssociatedTemplateAndRuleList()
```

##### `ResetPolicyDescription` <a name="ResetPolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription"></a>

```csharp
private void ResetPolicyDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList">AssociatedTemplateAndRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration">PolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput">AssociatedTemplateAndRuleListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput">PolicyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput">PolicyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">FirewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription">PolicyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedTemplateAndRuleList`<sup>Required</sup> <a name="AssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList"></a>

```csharp
public NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList AssociatedTemplateAndRuleList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `PolicyConfiguration`<sup>Required</sup> <a name="PolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration"></a>

```csharp
public NetworksecuritymanagerPolicyPolicyConfigurationOutputReference PolicyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```csharp
public NetworksecuritymanagerPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AssociatedTemplateAndRuleListInput`<sup>Optional</sup> <a name="AssociatedTemplateAndRuleListInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[] AssociatedTemplateAndRuleListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```csharp
public string FirewallTypeInput { get; }
```

- *Type:* string

---

##### `PolicyConfigurationInput`<sup>Optional</sup> <a name="PolicyConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyPolicyConfiguration PolicyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `PolicyDescriptionInput`<sup>Optional</sup> <a name="PolicyDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput"></a>

```csharp
public string PolicyDescriptionInput { get; }
```

- *Type:* string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```csharp
public string FirewallType { get; }
```

- *Type:* string

---

##### `PolicyDescription`<sup>Required</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription"></a>

```csharp
public string PolicyDescription { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct {
    string RuleArn = null,
    string TemplateArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn">RuleArn</a></code> | <code>string</code> | ARN of the associated rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn">TemplateArn</a></code> | <code>string</code> | ARN of the associated template. |

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn"></a>

```csharp
public string RuleArn { get; set; }
```

- *Type:* string

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#rule_arn NetworksecuritymanagerPolicy#rule_arn}

---

##### `TemplateArn`<sup>Optional</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn"></a>

```csharp
public string TemplateArn { get; set; }
```

- *Type:* string

ARN of the associated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#template_arn NetworksecuritymanagerPolicy#template_arn}

---

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FirewallType,
    NetworksecuritymanagerPolicyPolicyConfiguration PolicyConfiguration,
    string PolicyName,
    double Priority,
    IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[] AssociatedTemplateAndRuleList = null,
    string PolicyDescription = null,
    IResolvable|NetworksecuritymanagerPolicyTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">FirewallType</a></code> | <code>string</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration">PolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName">PolicyName</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList">AssociatedTemplateAndRuleList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]</code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription">PolicyDescription</a></code> | <code>string</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]</code> | The tags associated with the policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```csharp
public string FirewallType { get; set; }
```

- *Type:* string

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `PolicyConfiguration`<sup>Required</sup> <a name="PolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration"></a>

```csharp
public NetworksecuritymanagerPolicyPolicyConfiguration PolicyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `AssociatedTemplateAndRuleList`<sup>Optional</sup> <a name="AssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[] AssociatedTemplateAndRuleList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `PolicyDescription`<sup>Optional</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription"></a>

```csharp
public string PolicyDescription { get; set; }
```

- *Type:* string

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

### NetworksecuritymanagerPolicyPolicyConfiguration <a name="NetworksecuritymanagerPolicyPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyPolicyConfiguration {
    bool|IResolvable RemediationEnabled = null,
    bool|IResolvable ResourcesCleanUp = null,
    NetworksecuritymanagerPolicyPolicyConfigurationWafConfig WafConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled">RemediationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls automatic remediation of non-compliant resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls automatic cleanup of unused resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig">WafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | WAF-specific policy settings. Populated only for WAF firewall type policies. |

---

##### `RemediationEnabled`<sup>Optional</sup> <a name="RemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled"></a>

```csharp
public bool|IResolvable RemediationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls automatic remediation of non-compliant resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}

---

##### `ResourcesCleanUp`<sup>Optional</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp"></a>

```csharp
public bool|IResolvable ResourcesCleanUp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls automatic cleanup of unused resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}

---

##### `WafConfig`<sup>Optional</sup> <a name="WafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig"></a>

```csharp
public NetworksecuritymanagerPolicyPolicyConfigurationWafConfig WafConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

WAF-specific policy settings. Populated only for WAF firewall type policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyPolicyConfigurationWafConfig {
    string ConflictResolution = null,
    string ExistingCustomerWebAclResolution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution">ConflictResolution</a></code> | <code>string</code> | Conflict-resolution strategy applied to AWS WAF policies. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>string</code> | Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL. |

---

##### `ConflictResolution`<sup>Optional</sup> <a name="ConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution"></a>

```csharp
public string ConflictResolution { get; set; }
```

- *Type:* string

Conflict-resolution strategy applied to AWS WAF policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}

---

##### `ExistingCustomerWebAclResolution`<sup>Optional</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```csharp
public string ExistingCustomerWebAclResolution { get; set; }
```

- *Type:* string

Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}

---

### NetworksecuritymanagerPolicyTags <a name="NetworksecuritymanagerPolicyTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get"></a>

```csharp
private NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

---


### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn">ResetTemplateArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn"></a>

```csharp
private void ResetRuleArn()
```

##### `ResetTemplateArn` <a name="ResetTemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn"></a>

```csharp
private void ResetTemplateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput">TemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn">TemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput"></a>

```csharp
public string RuleArnInput { get; }
```

- *Type:* string

---

##### `TemplateArnInput`<sup>Optional</sup> <a name="TemplateArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput"></a>

```csharp
public string TemplateArnInput { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn"></a>

```csharp
public string TemplateArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyPolicyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig">PutWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled">ResetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp">ResetResourcesCleanUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig">ResetWafConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWafConfig` <a name="PutWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig"></a>

```csharp
private void PutWafConfig(NetworksecuritymanagerPolicyPolicyConfigurationWafConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `ResetRemediationEnabled` <a name="ResetRemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled"></a>

```csharp
private void ResetRemediationEnabled()
```

##### `ResetResourcesCleanUp` <a name="ResetResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp"></a>

```csharp
private void ResetResourcesCleanUp()
```

##### `ResetWafConfig` <a name="ResetWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig"></a>

```csharp
private void ResetWafConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig">WafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput">RemediationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput">ResourcesCleanUpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput">WafConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled">RemediationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig"></a>

```csharp
public NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference WafConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a>

---

##### `RemediationEnabledInput`<sup>Optional</sup> <a name="RemediationEnabledInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```csharp
public bool|IResolvable RemediationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcesCleanUpInput`<sup>Optional</sup> <a name="ResourcesCleanUpInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```csharp
public bool|IResolvable ResourcesCleanUpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WafConfigInput`<sup>Optional</sup> <a name="WafConfigInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyPolicyConfigurationWafConfig WafConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```csharp
public bool|IResolvable RemediationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcesCleanUp`<sup>Required</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```csharp
public bool|IResolvable ResourcesCleanUp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyPolicyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution">ResetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution">ResetExistingCustomerWebAclResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictResolution` <a name="ResetConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution"></a>

```csharp
private void ResetConflictResolution()
```

##### `ResetExistingCustomerWebAclResolution` <a name="ResetExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution"></a>

```csharp
private void ResetExistingCustomerWebAclResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">ConflictResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">ExistingCustomerWebAclResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution">ConflictResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolutionInput`<sup>Optional</sup> <a name="ConflictResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```csharp
public string ConflictResolutionInput { get; }
```

- *Type:* string

---

##### `ExistingCustomerWebAclResolutionInput`<sup>Optional</sup> <a name="ExistingCustomerWebAclResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```csharp
public string ExistingCustomerWebAclResolutionInput { get; }
```

- *Type:* string

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```csharp
public string ConflictResolution { get; }
```

- *Type:* string

---

##### `ExistingCustomerWebAclResolution`<sup>Required</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```csharp
public string ExistingCustomerWebAclResolution { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyPolicyConfigurationWafConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTagsList <a name="NetworksecuritymanagerPolicyTagsList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get"></a>

```csharp
private NetworksecuritymanagerPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

---


### NetworksecuritymanagerPolicyTagsOutputReference <a name="NetworksecuritymanagerPolicyTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>

---



