# `cloudwatchDomainAccessGrantForOrganization` Submodule <a name="`cloudwatchDomainAccessGrantForOrganization` Submodule" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchDomainAccessGrantForOrganization <a name="CloudwatchDomainAccessGrantForOrganization" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganization(Construct Scope, string Id, CloudwatchDomainAccessGrantForOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig">CloudwatchDomainAccessGrantForOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig">CloudwatchDomainAccessGrantForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal"></a>

```csharp
private void PutPrincipal(CloudwatchDomainAccessGrantForOrganizationPrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudwatchDomainAccessGrantForOrganizationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchDomainAccessGrantForOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchDomainAccessGrantForOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchDomainAccessGrantForOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchDomainAccessGrantForOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchDomainAccessGrantForOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchDomainAccessGrantForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchDomainAccessGrantForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId">GrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType">GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission">Permission</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId"></a>

```csharp
public string GrantId { get; }
```

- *Type:* string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType"></a>

```csharp
public string GrantType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal"></a>

```csharp
public CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags"></a>

```csharp
public CloudwatchDomainAccessGrantForOrganizationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipal PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchDomainAccessGrantForOrganizationConfig <a name="CloudwatchDomainAccessGrantForOrganizationConfig" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainId,
    string Name,
    string Permission,
    CloudwatchDomainAccessGrantForOrganizationPrincipal Principal,
    IResolvable|CloudwatchDomainAccessGrantForOrganizationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId">DomainId</a></code> | <code>string</code> | The unique identifier of the organization domain the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name">Name</a></code> | <code>string</code> | The name of the grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission">Permission</a></code> | <code>string</code> | The permission level the grant confers. Organization grants are administrative only. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

The unique identifier of the organization domain the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#domain_id CloudwatchDomainAccessGrantForOrganization#domain_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#name CloudwatchDomainAccessGrantForOrganization#name}

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

The permission level the grant confers. Organization grants are administrative only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#permission CloudwatchDomainAccessGrantForOrganization#permission}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal"></a>

```csharp
public CloudwatchDomainAccessGrantForOrganizationPrincipal Principal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal CloudwatchDomainAccessGrantForOrganization#principal}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#tags CloudwatchDomainAccessGrantForOrganization#tags}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipal <a name="CloudwatchDomainAccessGrantForOrganizationPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationPrincipal {
    string PrincipalType,
    IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[] PrincipalAttributes = null,
    string PrincipalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType">PrincipalType</a></code> | <code>string</code> | The type of principal the grant is issued to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes">PrincipalAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]</code> | Attribute key-value pairs that select the principals the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId">PrincipalId</a></code> | <code>string</code> | The identifier of the principal, such as an IAM role ARN or an Identity Center user ID. |

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

The type of principal the grant is issued to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_type CloudwatchDomainAccessGrantForOrganization#principal_type}

---

##### `PrincipalAttributes`<sup>Optional</sup> <a name="PrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[] PrincipalAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

Attribute key-value pairs that select the principals the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_attributes CloudwatchDomainAccessGrantForOrganization#principal_attributes}

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

The identifier of the principal, such as an IAM role ARN or an Identity Center user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_id CloudwatchDomainAccessGrantForOrganization#principal_id}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key">Key</a></code> | <code>string</code> | The attribute name. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value">Value</a></code> | <code>string</code> | The attribute value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

### CloudwatchDomainAccessGrantForOrganizationTags <a name="CloudwatchDomainAccessGrantForOrganizationTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes">PutPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes">ResetPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalAttributes` <a name="PutPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes"></a>

```csharp
private void PutPrincipalAttributes(IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

---

##### `ResetPrincipalAttributes` <a name="ResetPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes"></a>

```csharp
private void ResetPrincipalAttributes()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId"></a>

```csharp
private void ResetPrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes">PrincipalAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput">PrincipalAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalAttributes`<sup>Required</sup> <a name="PrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes"></a>

```csharp
public CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList PrincipalAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a>

---

##### `PrincipalAttributesInput`<sup>Optional</sup> <a name="PrincipalAttributesInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[] PrincipalAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get"></a>

```csharp
private CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>

---


### CloudwatchDomainAccessGrantForOrganizationTagsList <a name="CloudwatchDomainAccessGrantForOrganizationTagsList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get"></a>

```csharp
private CloudwatchDomainAccessGrantForOrganizationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

---


### CloudwatchDomainAccessGrantForOrganizationTagsOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchDomainAccessGrantForOrganizationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchDomainAccessGrantForOrganizationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>

---



