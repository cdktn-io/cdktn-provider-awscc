# `ec2ClientVpnTargetNetworkAssociation` Submodule <a name="`ec2ClientVpnTargetNetworkAssociation` Submodule" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnTargetNetworkAssociation <a name="Ec2ClientVpnTargetNetworkAssociation" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association awscc_ec2_client_vpn_target_network_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnTargetNetworkAssociation(Construct Scope, string Id, Ec2ClientVpnTargetNetworkAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig">Ec2ClientVpnTargetNetworkAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig">Ec2ClientVpnTargetNetworkAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ClientVpnTargetNetworkAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnTargetNetworkAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnTargetNetworkAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnTargetNetworkAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnTargetNetworkAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ClientVpnTargetNetworkAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ClientVpnTargetNetworkAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ClientVpnTargetNetworkAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnTargetNetworkAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.clientVpnEndpointIdInput">ClientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `ClientVpnEndpointIdInput`<sup>Optional</sup> <a name="ClientVpnEndpointIdInput" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.clientVpnEndpointIdInput"></a>

```csharp
public string ClientVpnEndpointIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnTargetNetworkAssociationConfig <a name="Ec2ClientVpnTargetNetworkAssociationConfig" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnTargetNetworkAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientVpnEndpointId,
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | The ID of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The Availability Zone to associate with the Client VPN endpoint. Used for Transit Gateway-based endpoints in place of SubnetId. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | The ID of the Availability Zone to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet to associate with the Client VPN endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; set; }
```

- *Type:* string

The ID of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#client_vpn_endpoint_id Ec2ClientVpnTargetNetworkAssociation#client_vpn_endpoint_id}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The Availability Zone to associate with the Client VPN endpoint. Used for Transit Gateway-based endpoints in place of SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#availability_zone Ec2ClientVpnTargetNetworkAssociation#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

The ID of the Availability Zone to associate with the Client VPN endpoint.

Used for Transit Gateway-based endpoints in place of SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#availability_zone_id Ec2ClientVpnTargetNetworkAssociation#availability_zone_id}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ClientVpnTargetNetworkAssociation.Ec2ClientVpnTargetNetworkAssociationConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet to associate with the Client VPN endpoint.

Required for VPC-based endpoints. For Transit Gateway-based endpoints, use AvailabilityZone or AvailabilityZoneId instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#subnet_id Ec2ClientVpnTargetNetworkAssociation#subnet_id}

---



