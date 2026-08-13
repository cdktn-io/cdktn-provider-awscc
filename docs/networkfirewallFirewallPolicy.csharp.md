# `networkfirewallFirewallPolicy` Submodule <a name="`networkfirewallFirewallPolicy` Submodule" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewallPolicy <a name="NetworkfirewallFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicy(Construct Scope, string Id, NetworkfirewallFirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig">NetworkfirewallFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig">NetworkfirewallFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy">PutFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFirewallPolicy` <a name="PutFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy"></a>

```csharp
private void PutFirewallPolicy(NetworkfirewallFirewallPolicyFirewallPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkfirewallFirewallPolicyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallFirewallPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkfirewallFirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallFirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicy">FirewallPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyArn">FirewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyId">FirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList">NetworkfirewallFirewallPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyNameInput">FirewallPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyName">FirewallPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicy"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyOutputReference FirewallPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a>

---

##### `FirewallPolicyArn`<sup>Required</sup> <a name="FirewallPolicyArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyArn"></a>

```csharp
public string FirewallPolicyArn { get; }
```

- *Type:* string

---

##### `FirewallPolicyId`<sup>Required</sup> <a name="FirewallPolicyId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyId"></a>

```csharp
public string FirewallPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tags"></a>

```csharp
public NetworkfirewallFirewallPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList">NetworkfirewallFirewallPolicyTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicy FirewallPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

---

##### `FirewallPolicyNameInput`<sup>Optional</sup> <a name="FirewallPolicyNameInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyNameInput"></a>

```csharp
public string FirewallPolicyNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tagsInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FirewallPolicyName`<sup>Required</sup> <a name="FirewallPolicyName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyName"></a>

```csharp
public string FirewallPolicyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallPolicyConfig <a name="NetworkfirewallFirewallPolicyConfig" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    NetworkfirewallFirewallPolicyFirewallPolicy FirewallPolicy,
    string FirewallPolicyName,
    string Description = null,
    IResolvable|NetworkfirewallFirewallPolicyTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicyName">FirewallPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicy"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicy FirewallPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}.

---

##### `FirewallPolicyName`<sup>Required</sup> <a name="FirewallPolicyName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicyName"></a>

```csharp
public string FirewallPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.tags"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}.

---

### NetworkfirewallFirewallPolicyFirewallPolicy <a name="NetworkfirewallFirewallPolicyFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicy {
    string[] StatelessDefaultActions,
    string[] StatelessFragmentDefaultActions,
    bool|IResolvable EnableTlsSessionHolding = null,
    NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables PolicyVariables = null,
    string[] StatefulDefaultActions = null,
    NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions StatefulEngineOptions = null,
    IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences[] StatefulRuleGroupReferences = null,
    IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions[] StatelessCustomActions = null,
    IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences[] StatelessRuleGroupReferences = null,
    string TlsInspectionConfigurationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessDefaultActions">StatelessDefaultActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions">StatelessFragmentDefaultActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.enableTlsSessionHolding">EnableTlsSessionHolding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.policyVariables">PolicyVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulDefaultActions">StatefulDefaultActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulEngineOptions">StatefulEngineOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences">StatefulRuleGroupReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessCustomActions">StatelessCustomActions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences">StatelessRuleGroupReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.tlsInspectionConfigurationArn">TlsInspectionConfigurationArn</a></code> | <code>string</code> | A resource ARN. |

---

##### `StatelessDefaultActions`<sup>Required</sup> <a name="StatelessDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessDefaultActions"></a>

```csharp
public string[] StatelessDefaultActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}.

---

##### `StatelessFragmentDefaultActions`<sup>Required</sup> <a name="StatelessFragmentDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions"></a>

```csharp
public string[] StatelessFragmentDefaultActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}.

---

##### `EnableTlsSessionHolding`<sup>Optional</sup> <a name="EnableTlsSessionHolding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.enableTlsSessionHolding"></a>

```csharp
public bool|IResolvable EnableTlsSessionHolding { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}.

---

##### `PolicyVariables`<sup>Optional</sup> <a name="PolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.policyVariables"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables PolicyVariables { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}.

---

##### `StatefulDefaultActions`<sup>Optional</sup> <a name="StatefulDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulDefaultActions"></a>

```csharp
public string[] StatefulDefaultActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}.

---

##### `StatefulEngineOptions`<sup>Optional</sup> <a name="StatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulEngineOptions"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions StatefulEngineOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}.

---

##### `StatefulRuleGroupReferences`<sup>Optional</sup> <a name="StatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences[] StatefulRuleGroupReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}.

---

##### `StatelessCustomActions`<sup>Optional</sup> <a name="StatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessCustomActions"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions[] StatelessCustomActions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}.

---

##### `StatelessRuleGroupReferences`<sup>Optional</sup> <a name="StatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences[] StatelessRuleGroupReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}.

---

##### `TlsInspectionConfigurationArn`<sup>Optional</sup> <a name="TlsInspectionConfigurationArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.tlsInspectionConfigurationArn"></a>

```csharp
public string TlsInspectionConfigurationArn { get; set; }
```

- *Type:* string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn NetworkfirewallFirewallPolicy#tls_inspection_configuration_arn}

---

### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables {
    IResolvable|System.Collections.Generic.IDictionary<string, NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables> RuleVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.property.ruleVariables">RuleVariables</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}. |

---

##### `RuleVariables`<sup>Optional</sup> <a name="RuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.property.ruleVariables"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables> RuleVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables {
    string[] Definition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.property.definition">Definition</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.property.definition"></a>

```csharp
public string[] Definition { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {
    NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts FlowTimeouts = null,
    string RuleOrder = null,
    string StreamExceptionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.flowTimeouts">FlowTimeouts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.ruleOrder">RuleOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.streamExceptionPolicy">StreamExceptionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}. |

---

##### `FlowTimeouts`<sup>Optional</sup> <a name="FlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.flowTimeouts"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts FlowTimeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}.

---

##### `RuleOrder`<sup>Optional</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.ruleOrder"></a>

```csharp
public string RuleOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}.

---

##### `StreamExceptionPolicy`<sup>Optional</sup> <a name="StreamExceptionPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.streamExceptionPolicy"></a>

```csharp
public string StreamExceptionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts {
    double TcpIdleTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}. |

---

##### `TcpIdleTimeoutSeconds`<sup>Optional</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.property.tcpIdleTimeoutSeconds"></a>

```csharp
public double TcpIdleTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences {
    bool|IResolvable DeepThreatInspection = null,
    NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride Override = null,
    double Priority = null,
    string ResourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.deepThreatInspection">DeepThreatInspection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection NetworkfirewallFirewallPolicy#deep_threat_inspection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.override">Override</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.resourceArn">ResourceArn</a></code> | <code>string</code> | A resource ARN. |

---

##### `DeepThreatInspection`<sup>Optional</sup> <a name="DeepThreatInspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.deepThreatInspection"></a>

```csharp
public bool|IResolvable DeepThreatInspection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection NetworkfirewallFirewallPolicy#deep_threat_inspection}.

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.override"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride Override { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride {
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions {
    NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition ActionDefinition = null,
    string ActionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}. |

---

##### `ActionDefinition`<sup>Optional</sup> <a name="ActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionDefinition"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition ActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition {
    NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction PublishMetricAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}. |

---

##### `PublishMetricAction`<sup>Optional</sup> <a name="PublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.property.publishMetricAction"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction PublishMetricAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction {
    IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] Dimensions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.property.dimensions">Dimensions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.property.dimensions"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] Dimensions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences {
    double Priority = null,
    string ResourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.resourceArn">ResourceArn</a></code> | <code>string</code> | A resource ARN. |

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}

---

### NetworkfirewallFirewallPolicyTags <a name="NetworkfirewallFirewallPolicyTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallPolicyFirewallPolicyOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables">PutPolicyVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions">PutStatefulEngineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences">PutStatefulRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions">PutStatelessCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences">PutStatelessRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetEnableTlsSessionHolding">ResetEnableTlsSessionHolding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetPolicyVariables">ResetPolicyVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulDefaultActions">ResetStatefulDefaultActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulEngineOptions">ResetStatefulEngineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulRuleGroupReferences">ResetStatefulRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessCustomActions">ResetStatelessCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessRuleGroupReferences">ResetStatelessRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetTlsInspectionConfigurationArn">ResetTlsInspectionConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicyVariables` <a name="PutPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables"></a>

```csharp
private void PutPolicyVariables(NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---

##### `PutStatefulEngineOptions` <a name="PutStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions"></a>

```csharp
private void PutStatefulEngineOptions(NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---

##### `PutStatefulRuleGroupReferences` <a name="PutStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences"></a>

```csharp
private void PutStatefulRuleGroupReferences(IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]

---

##### `PutStatelessCustomActions` <a name="PutStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions"></a>

```csharp
private void PutStatelessCustomActions(IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]

---

##### `PutStatelessRuleGroupReferences` <a name="PutStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences"></a>

```csharp
private void PutStatelessRuleGroupReferences(IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]

---

##### `ResetEnableTlsSessionHolding` <a name="ResetEnableTlsSessionHolding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetEnableTlsSessionHolding"></a>

```csharp
private void ResetEnableTlsSessionHolding()
```

##### `ResetPolicyVariables` <a name="ResetPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetPolicyVariables"></a>

```csharp
private void ResetPolicyVariables()
```

##### `ResetStatefulDefaultActions` <a name="ResetStatefulDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulDefaultActions"></a>

```csharp
private void ResetStatefulDefaultActions()
```

##### `ResetStatefulEngineOptions` <a name="ResetStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulEngineOptions"></a>

```csharp
private void ResetStatefulEngineOptions()
```

##### `ResetStatefulRuleGroupReferences` <a name="ResetStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulRuleGroupReferences"></a>

```csharp
private void ResetStatefulRuleGroupReferences()
```

##### `ResetStatelessCustomActions` <a name="ResetStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessCustomActions"></a>

```csharp
private void ResetStatelessCustomActions()
```

##### `ResetStatelessRuleGroupReferences` <a name="ResetStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessRuleGroupReferences"></a>

```csharp
private void ResetStatelessRuleGroupReferences()
```

##### `ResetTlsInspectionConfigurationArn` <a name="ResetTlsInspectionConfigurationArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetTlsInspectionConfigurationArn"></a>

```csharp
private void ResetTlsInspectionConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables">PolicyVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions">StatefulEngineOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences">StatefulRuleGroupReferences</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions">StatelessCustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences">StatelessRuleGroupReferences</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHoldingInput">EnableTlsSessionHoldingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariablesInput">PolicyVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActionsInput">StatefulDefaultActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptionsInput">StatefulEngineOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferencesInput">StatefulRuleGroupReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActionsInput">StatelessCustomActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActionsInput">StatelessDefaultActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActionsInput">StatelessFragmentDefaultActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferencesInput">StatelessRuleGroupReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArnInput">TlsInspectionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding">EnableTlsSessionHolding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions">StatefulDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions">StatelessDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions">StatelessFragmentDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn">TlsInspectionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyVariables`<sup>Required</sup> <a name="PolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference PolicyVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a>

---

##### `StatefulEngineOptions`<sup>Required</sup> <a name="StatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference StatefulEngineOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a>

---

##### `StatefulRuleGroupReferences`<sup>Required</sup> <a name="StatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList StatefulRuleGroupReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a>

---

##### `StatelessCustomActions`<sup>Required</sup> <a name="StatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList StatelessCustomActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a>

---

##### `StatelessRuleGroupReferences`<sup>Required</sup> <a name="StatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList StatelessRuleGroupReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a>

---

##### `EnableTlsSessionHoldingInput`<sup>Optional</sup> <a name="EnableTlsSessionHoldingInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHoldingInput"></a>

```csharp
public bool|IResolvable EnableTlsSessionHoldingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyVariablesInput`<sup>Optional</sup> <a name="PolicyVariablesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariablesInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables PolicyVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---

##### `StatefulDefaultActionsInput`<sup>Optional</sup> <a name="StatefulDefaultActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActionsInput"></a>

```csharp
public string[] StatefulDefaultActionsInput { get; }
```

- *Type:* string[]

---

##### `StatefulEngineOptionsInput`<sup>Optional</sup> <a name="StatefulEngineOptionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptionsInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions StatefulEngineOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---

##### `StatefulRuleGroupReferencesInput`<sup>Optional</sup> <a name="StatefulRuleGroupReferencesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferencesInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences[] StatefulRuleGroupReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]

---

##### `StatelessCustomActionsInput`<sup>Optional</sup> <a name="StatelessCustomActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActionsInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions[] StatelessCustomActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]

---

##### `StatelessDefaultActionsInput`<sup>Optional</sup> <a name="StatelessDefaultActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActionsInput"></a>

```csharp
public string[] StatelessDefaultActionsInput { get; }
```

- *Type:* string[]

---

##### `StatelessFragmentDefaultActionsInput`<sup>Optional</sup> <a name="StatelessFragmentDefaultActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActionsInput"></a>

```csharp
public string[] StatelessFragmentDefaultActionsInput { get; }
```

- *Type:* string[]

---

##### `StatelessRuleGroupReferencesInput`<sup>Optional</sup> <a name="StatelessRuleGroupReferencesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferencesInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences[] StatelessRuleGroupReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]

---

##### `TlsInspectionConfigurationArnInput`<sup>Optional</sup> <a name="TlsInspectionConfigurationArnInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArnInput"></a>

```csharp
public string TlsInspectionConfigurationArnInput { get; }
```

- *Type:* string

---

##### `EnableTlsSessionHolding`<sup>Required</sup> <a name="EnableTlsSessionHolding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding"></a>

```csharp
public bool|IResolvable EnableTlsSessionHolding { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatefulDefaultActions`<sup>Required</sup> <a name="StatefulDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions"></a>

```csharp
public string[] StatefulDefaultActions { get; }
```

- *Type:* string[]

---

##### `StatelessDefaultActions`<sup>Required</sup> <a name="StatelessDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions"></a>

```csharp
public string[] StatelessDefaultActions { get; }
```

- *Type:* string[]

---

##### `StatelessFragmentDefaultActions`<sup>Required</sup> <a name="StatelessFragmentDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions"></a>

```csharp
public string[] StatelessFragmentDefaultActions { get; }
```

- *Type:* string[]

---

##### `TlsInspectionConfigurationArn`<sup>Required</sup> <a name="TlsInspectionConfigurationArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn"></a>

```csharp
public string TlsInspectionConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables">PutRuleVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resetRuleVariables">ResetRuleVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleVariables` <a name="PutRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables"></a>

```csharp
private void PutRuleVariables(IResolvable|System.Collections.Generic.IDictionary<string, NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>>

---

##### `ResetRuleVariables` <a name="ResetRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resetRuleVariables"></a>

```csharp
private void ResetRuleVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables">RuleVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariablesInput">RuleVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleVariables`<sup>Required</sup> <a name="RuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap RuleVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a>

---

##### `RuleVariablesInput`<sup>Optional</sup> <a name="RuleVariablesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariablesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables> RuleVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get"></a>

```csharp
private NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>>

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resetDefinition"></a>

```csharp
private void ResetDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition">Definition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definitionInput"></a>

```csharp
public string[] DefinitionInput { get; }
```

- *Type:* string[]

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition"></a>

```csharp
public string[] Definition { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resetTcpIdleTimeoutSeconds">ResetTcpIdleTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTcpIdleTimeoutSeconds` <a name="ResetTcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resetTcpIdleTimeoutSeconds"></a>

```csharp
private void ResetTcpIdleTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSecondsInput">TcpIdleTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TcpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="TcpIdleTimeoutSecondsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSecondsInput"></a>

```csharp
public double TcpIdleTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `TcpIdleTimeoutSeconds`<sup>Required</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds"></a>

```csharp
public double TcpIdleTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts">PutFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetFlowTimeouts">ResetFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetRuleOrder">ResetRuleOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetStreamExceptionPolicy">ResetStreamExceptionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlowTimeouts` <a name="PutFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts"></a>

```csharp
private void PutFlowTimeouts(NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---

##### `ResetFlowTimeouts` <a name="ResetFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetFlowTimeouts"></a>

```csharp
private void ResetFlowTimeouts()
```

##### `ResetRuleOrder` <a name="ResetRuleOrder" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetRuleOrder"></a>

```csharp
private void ResetRuleOrder()
```

##### `ResetStreamExceptionPolicy` <a name="ResetStreamExceptionPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetStreamExceptionPolicy"></a>

```csharp
private void ResetStreamExceptionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts">FlowTimeouts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeoutsInput">FlowTimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrderInput">RuleOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicyInput">StreamExceptionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder">RuleOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy">StreamExceptionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowTimeouts`<sup>Required</sup> <a name="FlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference FlowTimeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a>

---

##### `FlowTimeoutsInput`<sup>Optional</sup> <a name="FlowTimeoutsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeoutsInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts FlowTimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---

##### `RuleOrderInput`<sup>Optional</sup> <a name="RuleOrderInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrderInput"></a>

```csharp
public string RuleOrderInput { get; }
```

- *Type:* string

---

##### `StreamExceptionPolicyInput`<sup>Optional</sup> <a name="StreamExceptionPolicyInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicyInput"></a>

```csharp
public string StreamExceptionPolicyInput { get; }
```

- *Type:* string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder"></a>

```csharp
public string RuleOrder { get; }
```

- *Type:* string

---

##### `StreamExceptionPolicy`<sup>Required</sup> <a name="StreamExceptionPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy"></a>

```csharp
public string StreamExceptionPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get"></a>

```csharp
private NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>[]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride">PutOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetDeepThreatInspection">ResetDeepThreatInspection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverride` <a name="PutOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride"></a>

```csharp
private void PutOverride(NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---

##### `ResetDeepThreatInspection` <a name="ResetDeepThreatInspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetDeepThreatInspection"></a>

```csharp
private void ResetDeepThreatInspection()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetOverride"></a>

```csharp
private void ResetOverride()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override">Override</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspectionInput">DeepThreatInspectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.overrideInput">OverrideInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection">DeepThreatInspection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference Override { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a>

---

##### `DeepThreatInspectionInput`<sup>Optional</sup> <a name="DeepThreatInspectionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspectionInput"></a>

```csharp
public bool|IResolvable DeepThreatInspectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.overrideInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride OverrideInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `DeepThreatInspection`<sup>Required</sup> <a name="DeepThreatInspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection"></a>

```csharp
public bool|IResolvable DeepThreatInspection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction">PutPublishMetricAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resetPublishMetricAction">ResetPublishMetricAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublishMetricAction` <a name="PutPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction"></a>

```csharp
private void PutPublishMetricAction(NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---

##### `ResetPublishMetricAction` <a name="ResetPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resetPublishMetricAction"></a>

```csharp
private void ResetPublishMetricAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput">PublishMetricActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishMetricAction`<sup>Required</sup> <a name="PublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference PublishMetricAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `PublishMetricActionInput`<sup>Optional</sup> <a name="PublishMetricActionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction PublishMetricActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```csharp
private NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[] DimensionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get"></a>

```csharp
private NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>[]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition">PutActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionDefinition">ResetActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionDefinition` <a name="PutActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition"></a>

```csharp
private void PutActionDefinition(NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---

##### `ResetActionDefinition` <a name="ResetActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionDefinition"></a>

```csharp
private void ResetActionDefinition()
```

##### `ResetActionName` <a name="ResetActionName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionName"></a>

```csharp
private void ResetActionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinitionInput">ActionDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionDefinition`<sup>Required</sup> <a name="ActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition"></a>

```csharp
public NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference ActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a>

---

##### `ActionDefinitionInput`<sup>Optional</sup> <a name="ActionDefinitionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinitionInput"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition ActionDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get"></a>

```csharp
private NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>[]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>

---


### NetworkfirewallFirewallPolicyTagsList <a name="NetworkfirewallFirewallPolicyTagsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get"></a>

```csharp
private NetworkfirewallFirewallPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>[]

---


### NetworkfirewallFirewallPolicyTagsOutputReference <a name="NetworkfirewallFirewallPolicyTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkfirewallFirewallPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallFirewallPolicyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>

---



