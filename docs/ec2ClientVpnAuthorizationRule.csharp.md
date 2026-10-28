# `ec2ClientVpnAuthorizationRule` Submodule <a name="`ec2ClientVpnAuthorizationRule` Submodule" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnAuthorizationRule <a name="Ec2ClientVpnAuthorizationRule" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule awscc_ec2_client_vpn_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnAuthorizationRule(Construct Scope, string Id, Ec2ClientVpnAuthorizationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig">Ec2ClientVpnAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig">Ec2ClientVpnAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAccessGroupId">ResetAccessGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAuthorizeAllGroups">ResetAuthorizeAllGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessGroupId` <a name="ResetAccessGroupId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAccessGroupId"></a>

```csharp
private void ResetAccessGroupId()
```

##### `ResetAuthorizeAllGroups` <a name="ResetAuthorizeAllGroups" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAuthorizeAllGroups"></a>

```csharp
private void ResetAuthorizeAllGroups()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ClientVpnAuthorizationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnAuthorizationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnAuthorizationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnAuthorizationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnAuthorizationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ClientVpnAuthorizationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ClientVpnAuthorizationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ClientVpnAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnAuthorizationRuleId">ClientVpnAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupIdInput">AccessGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroupsInput">AuthorizeAllGroupsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointIdInput">ClientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidrInput">TargetNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupId">AccessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroups">AuthorizeAllGroups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidr">TargetNetworkCidr</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientVpnAuthorizationRuleId`<sup>Required</sup> <a name="ClientVpnAuthorizationRuleId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnAuthorizationRuleId"></a>

```csharp
public string ClientVpnAuthorizationRuleId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccessGroupIdInput`<sup>Optional</sup> <a name="AccessGroupIdInput" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupIdInput"></a>

```csharp
public string AccessGroupIdInput { get; }
```

- *Type:* string

---

##### `AuthorizeAllGroupsInput`<sup>Optional</sup> <a name="AuthorizeAllGroupsInput" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroupsInput"></a>

```csharp
public bool|IResolvable AuthorizeAllGroupsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientVpnEndpointIdInput`<sup>Optional</sup> <a name="ClientVpnEndpointIdInput" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointIdInput"></a>

```csharp
public string ClientVpnEndpointIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `TargetNetworkCidrInput`<sup>Optional</sup> <a name="TargetNetworkCidrInput" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidrInput"></a>

```csharp
public string TargetNetworkCidrInput { get; }
```

- *Type:* string

---

##### `AccessGroupId`<sup>Required</sup> <a name="AccessGroupId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupId"></a>

```csharp
public string AccessGroupId { get; }
```

- *Type:* string

---

##### `AuthorizeAllGroups`<sup>Required</sup> <a name="AuthorizeAllGroups" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroups"></a>

```csharp
public bool|IResolvable AuthorizeAllGroups { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `TargetNetworkCidr`<sup>Required</sup> <a name="TargetNetworkCidr" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidr"></a>

```csharp
public string TargetNetworkCidr { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnAuthorizationRuleConfig <a name="Ec2ClientVpnAuthorizationRuleConfig" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnAuthorizationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientVpnEndpointId,
    string TargetNetworkCidr,
    string AccessGroupId = null,
    bool|IResolvable AuthorizeAllGroups = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | The ID of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.targetNetworkCidr">TargetNetworkCidr</a></code> | <code>string</code> | The IPv4 address range, in CIDR notation, of the network for which access is being authorized. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.accessGroupId">AccessGroupId</a></code> | <code>string</code> | The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.authorizeAllGroups">AuthorizeAllGroups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to grant access to all clients. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.description">Description</a></code> | <code>string</code> | A brief description of the authorization rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; set; }
```

- *Type:* string

The ID of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}

---

##### `TargetNetworkCidr`<sup>Required</sup> <a name="TargetNetworkCidr" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.targetNetworkCidr"></a>

```csharp
public string TargetNetworkCidr { get; set; }
```

- *Type:* string

The IPv4 address range, in CIDR notation, of the network for which access is being authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}

---

##### `AccessGroupId`<sup>Optional</sup> <a name="AccessGroupId" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.accessGroupId"></a>

```csharp
public string AccessGroupId { get; set; }
```

- *Type:* string

The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group.

Required if `AuthorizeAllGroups` is `false` or not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}

---

##### `AuthorizeAllGroups`<sup>Optional</sup> <a name="AuthorizeAllGroups" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.authorizeAllGroups"></a>

```csharp
public bool|IResolvable AuthorizeAllGroups { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to grant access to all clients.

Specify `true` to grant all clients who successfully establish a VPN connection access to the network. Must be set to `true` if `AccessGroupId` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the authorization rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}

---



