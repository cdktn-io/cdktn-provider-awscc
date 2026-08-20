# `route53RecoveryreadinessReadinessCheck` Submodule <a name="`route53RecoveryreadinessReadinessCheck` Submodule" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessReadinessCheck <a name="Route53RecoveryreadinessReadinessCheck" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check awscc_route53recoveryreadiness_readiness_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessReadinessCheck(Construct Scope, string Id, Route53RecoveryreadinessReadinessCheckConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig">Route53RecoveryreadinessReadinessCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig">Route53RecoveryreadinessReadinessCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetReadinessCheckName">ResetReadinessCheckName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetResourceSetName">ResetResourceSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53RecoveryreadinessReadinessCheckTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]

---

##### `ResetReadinessCheckName` <a name="ResetReadinessCheckName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetReadinessCheckName"></a>

```csharp
private void ResetReadinessCheckName()
```

##### `ResetResourceSetName` <a name="ResetResourceSetName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetResourceSetName"></a>

```csharp
private void ResetResourceSetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoveryreadinessReadinessCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessReadinessCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessReadinessCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessReadinessCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessReadinessCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoveryreadinessReadinessCheck resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoveryreadinessReadinessCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoveryreadinessReadinessCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoveryreadinessReadinessCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckArn">ReadinessCheckArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList">Route53RecoveryreadinessReadinessCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckNameInput">ReadinessCheckNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetNameInput">ResourceSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckName">ReadinessCheckName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetName">ResourceSetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReadinessCheckArn`<sup>Required</sup> <a name="ReadinessCheckArn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckArn"></a>

```csharp
public string ReadinessCheckArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tags"></a>

```csharp
public Route53RecoveryreadinessReadinessCheckTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList">Route53RecoveryreadinessReadinessCheckTagsList</a>

---

##### `ReadinessCheckNameInput`<sup>Optional</sup> <a name="ReadinessCheckNameInput" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckNameInput"></a>

```csharp
public string ReadinessCheckNameInput { get; }
```

- *Type:* string

---

##### `ResourceSetNameInput`<sup>Optional</sup> <a name="ResourceSetNameInput" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetNameInput"></a>

```csharp
public string ResourceSetNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsInput"></a>

```csharp
public IResolvable|Route53RecoveryreadinessReadinessCheckTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]

---

##### `ReadinessCheckName`<sup>Required</sup> <a name="ReadinessCheckName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckName"></a>

```csharp
public string ReadinessCheckName { get; }
```

- *Type:* string

---

##### `ResourceSetName`<sup>Required</sup> <a name="ResourceSetName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetName"></a>

```csharp
public string ResourceSetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessReadinessCheckConfig <a name="Route53RecoveryreadinessReadinessCheckConfig" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessReadinessCheckConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ReadinessCheckName = null,
    string ResourceSetName = null,
    IResolvable|Route53RecoveryreadinessReadinessCheckTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.readinessCheckName">ReadinessCheckName</a></code> | <code>string</code> | Name of the ReadinessCheck to create. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.resourceSetName">ResourceSetName</a></code> | <code>string</code> | The name of the resource set to check. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReadinessCheckName`<sup>Optional</sup> <a name="ReadinessCheckName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.readinessCheckName"></a>

```csharp
public string ReadinessCheckName { get; set; }
```

- *Type:* string

Name of the ReadinessCheck to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}

---

##### `ResourceSetName`<sup>Optional</sup> <a name="ResourceSetName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.resourceSetName"></a>

```csharp
public string ResourceSetName { get; set; }
```

- *Type:* string

The name of the resource set to check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tags"></a>

```csharp
public IResolvable|Route53RecoveryreadinessReadinessCheckTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}

---

### Route53RecoveryreadinessReadinessCheckTags <a name="Route53RecoveryreadinessReadinessCheckTags" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessReadinessCheckTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#key Route53RecoveryreadinessReadinessCheck#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#value Route53RecoveryreadinessReadinessCheck#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#key Route53RecoveryreadinessReadinessCheck#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoveryreadiness_readiness_check#value Route53RecoveryreadinessReadinessCheck#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessReadinessCheckTagsList <a name="Route53RecoveryreadinessReadinessCheckTagsList" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessReadinessCheckTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.get"></a>

```csharp
private Route53RecoveryreadinessReadinessCheckTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoveryreadinessReadinessCheckTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>[]

---


### Route53RecoveryreadinessReadinessCheckTagsOutputReference <a name="Route53RecoveryreadinessReadinessCheckTagsOutputReference" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessReadinessCheckTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoveryreadinessReadinessCheckTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTags">Route53RecoveryreadinessReadinessCheckTags</a>

---



