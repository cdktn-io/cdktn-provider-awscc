# `customerprofilesIntegration` Submodule <a name="`customerprofilesIntegration` Submodule" id="@cdktn/provider-awscc.customerprofilesIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesIntegration <a name="CustomerprofilesIntegration" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration awscc_customerprofiles_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegration(Construct Scope, string Id, CustomerprofilesIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig">CustomerprofilesIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig">CustomerprofilesIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition">PutFlowDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames">PutObjectTypeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetEventTriggerNames">ResetEventTriggerNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetFlowDefinition">ResetFlowDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeName">ResetObjectTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeNames">ResetObjectTypeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowDefinition` <a name="PutFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition"></a>

```csharp
private void PutFlowDefinition(CustomerprofilesIntegrationFlowDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

---

##### `PutObjectTypeNames` <a name="PutObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames"></a>

```csharp
private void PutObjectTypeNames(IResolvable|CustomerprofilesIntegrationObjectTypeNames[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags"></a>

```csharp
private void PutTags(IResolvable|CustomerprofilesIntegrationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]

---

##### `ResetEventTriggerNames` <a name="ResetEventTriggerNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetEventTriggerNames"></a>

```csharp
private void ResetEventTriggerNames()
```

##### `ResetFlowDefinition` <a name="ResetFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetFlowDefinition"></a>

```csharp
private void ResetFlowDefinition()
```

##### `ResetObjectTypeName` <a name="ResetObjectTypeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeName"></a>

```csharp
private void ResetObjectTypeName()
```

##### `ResetObjectTypeNames` <a name="ResetObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeNames"></a>

```csharp
private void ResetObjectTypeNames()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetUri"></a>

```csharp
private void ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinition">FlowDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference">CustomerprofilesIntegrationFlowDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNames">ObjectTypeNames</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList">CustomerprofilesIntegrationObjectTypeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList">CustomerprofilesIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNamesInput">EventTriggerNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinitionInput">FlowDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNamesInput">ObjectTypeNamesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNames">EventTriggerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uri">Uri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FlowDefinition`<sup>Required</sup> <a name="FlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinition"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionOutputReference FlowDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference">CustomerprofilesIntegrationFlowDefinitionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `ObjectTypeNames`<sup>Required</sup> <a name="ObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNames"></a>

```csharp
public CustomerprofilesIntegrationObjectTypeNamesList ObjectTypeNames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList">CustomerprofilesIntegrationObjectTypeNamesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tags"></a>

```csharp
public CustomerprofilesIntegrationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList">CustomerprofilesIntegrationTagsList</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EventTriggerNamesInput`<sup>Optional</sup> <a name="EventTriggerNamesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNamesInput"></a>

```csharp
public string[] EventTriggerNamesInput { get; }
```

- *Type:* string[]

---

##### `FlowDefinitionInput`<sup>Optional</sup> <a name="FlowDefinitionInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinitionInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinition FlowDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNameInput"></a>

```csharp
public string ObjectTypeNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeNamesInput`<sup>Optional</sup> <a name="ObjectTypeNamesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNamesInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationObjectTypeNames[] ObjectTypeNamesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tagsInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EventTriggerNames`<sup>Required</sup> <a name="EventTriggerNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNames"></a>

```csharp
public string[] EventTriggerNames { get; }
```

- *Type:* string[]

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesIntegrationConfig <a name="CustomerprofilesIntegrationConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string[] EventTriggerNames = null,
    CustomerprofilesIntegrationFlowDefinition FlowDefinition = null,
    string ObjectTypeName = null,
    IResolvable|CustomerprofilesIntegrationObjectTypeNames[] ObjectTypeNames = null,
    string Scope = null,
    IResolvable|CustomerprofilesIntegrationTags[] Tags = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.domainName">DomainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.eventTriggerNames">EventTriggerNames</a></code> | <code>string[]</code> | A list of unique names for active event triggers associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.flowDefinition">FlowDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | The name of the ObjectType defined for the 3rd party data in Profile Service. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeNames">ObjectTypeNames</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]</code> | The mapping between 3rd party event types and ObjectType names. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.scope">Scope</a></code> | <code>string</code> | Scope of the integration, such as 'PROFILE' or 'DOMAIN'. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.uri">Uri</a></code> | <code>string</code> | The URI of the S3 bucket or any other type of data source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#domain_name CustomerprofilesIntegration#domain_name}

---

##### `EventTriggerNames`<sup>Optional</sup> <a name="EventTriggerNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.eventTriggerNames"></a>

```csharp
public string[] EventTriggerNames { get; set; }
```

- *Type:* string[]

A list of unique names for active event triggers associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#event_trigger_names CustomerprofilesIntegration#event_trigger_names}

---

##### `FlowDefinition`<sup>Optional</sup> <a name="FlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.flowDefinition"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinition FlowDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}.

---

##### `ObjectTypeName`<sup>Optional</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; set; }
```

- *Type:* string

The name of the ObjectType defined for the 3rd party data in Profile Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object_type_name CustomerprofilesIntegration#object_type_name}

---

##### `ObjectTypeNames`<sup>Optional</sup> <a name="ObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeNames"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationObjectTypeNames[] ObjectTypeNames { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]

The mapping between 3rd party event types and ObjectType names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object_type_names CustomerprofilesIntegration#object_type_names}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Scope of the integration, such as 'PROFILE' or 'DOMAIN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scope CustomerprofilesIntegration#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.tags"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tags CustomerprofilesIntegration#tags}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the S3 bucket or any other type of data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#uri CustomerprofilesIntegration#uri}

---

### CustomerprofilesIntegrationFlowDefinition <a name="CustomerprofilesIntegrationFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinition {
    string Description = null,
    string FlowName = null,
    string KmsArn = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig SourceFlowConfig = null,
    IResolvable|CustomerprofilesIntegrationFlowDefinitionTasks[] Tasks = null,
    CustomerprofilesIntegrationFlowDefinitionTriggerConfig TriggerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.flowName">FlowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.kmsArn">KmsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.sourceFlowConfig">SourceFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.tasks">Tasks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.triggerConfig">TriggerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}.

---

##### `FlowName`<sup>Optional</sup> <a name="FlowName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.flowName"></a>

```csharp
public string FlowName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}.

---

##### `KmsArn`<sup>Optional</sup> <a name="KmsArn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.kmsArn"></a>

```csharp
public string KmsArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}.

---

##### `SourceFlowConfig`<sup>Optional</sup> <a name="SourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.sourceFlowConfig"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig SourceFlowConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.tasks"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasks[] Tasks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}.

---

##### `TriggerConfig`<sup>Optional</sup> <a name="TriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.triggerConfig"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTriggerConfig TriggerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig {
    string ConnectorProfileName = null,
    string ConnectorType = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig IncrementalPullConfig = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties SourceConnectorProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorProfileName">ConnectorProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorType">ConnectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.incrementalPullConfig">IncrementalPullConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.sourceConnectorProperties">SourceConnectorProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}. |

---

##### `ConnectorProfileName`<sup>Optional</sup> <a name="ConnectorProfileName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorProfileName"></a>

```csharp
public string ConnectorProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}.

---

##### `ConnectorType`<sup>Optional</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorType"></a>

```csharp
public string ConnectorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}.

---

##### `IncrementalPullConfig`<sup>Optional</sup> <a name="IncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.incrementalPullConfig"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig IncrementalPullConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}.

---

##### `SourceConnectorProperties`<sup>Optional</sup> <a name="SourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.sourceConnectorProperties"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties SourceConnectorProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig {
    string DatetimeTypeFieldName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName">DatetimeTypeFieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}. |

---

##### `DatetimeTypeFieldName`<sup>Optional</sup> <a name="DatetimeTypeFieldName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName"></a>

```csharp
public string DatetimeTypeFieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties {
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo Marketo = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 S3 = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce Salesforce = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow ServiceNow = null,
    CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk Zendesk = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.marketo">Marketo</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.salesforce">Salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.zendesk">Zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}. |

---

##### `Marketo`<sup>Optional</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.marketo"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo Marketo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.s3"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

##### `Salesforce`<sup>Optional</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.salesforce"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce Salesforce { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.serviceNow"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

##### `Zendesk`<sup>Optional</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.zendesk"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk Zendesk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo {
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 {
    string BucketName = null,
    string BucketPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce {
    bool|IResolvable EnableDynamicFieldUpdate = null,
    bool|IResolvable IncludeDeletedRecords = null,
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate">EnableDynamicFieldUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords">IncludeDeletedRecords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `EnableDynamicFieldUpdate`<sup>Optional</sup> <a name="EnableDynamicFieldUpdate" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate"></a>

```csharp
public bool|IResolvable EnableDynamicFieldUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}.

---

##### `IncludeDeletedRecords`<sup>Optional</sup> <a name="IncludeDeletedRecords" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords"></a>

```csharp
public bool|IResolvable IncludeDeletedRecords { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow {
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk {
    string Object = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionTasks <a name="CustomerprofilesIntegrationFlowDefinitionTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasks {
    CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator ConnectorOperator = null,
    string DestinationField = null,
    string[] SourceFields = null,
    IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] TaskProperties = null,
    string TaskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.connectorOperator">ConnectorOperator</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.destinationField">DestinationField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.sourceFields">SourceFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskProperties">TaskProperties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}. |

---

##### `ConnectorOperator`<sup>Optional</sup> <a name="ConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.connectorOperator"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator ConnectorOperator { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}.

---

##### `DestinationField`<sup>Optional</sup> <a name="DestinationField" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.destinationField"></a>

```csharp
public string DestinationField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}.

---

##### `SourceFields`<sup>Optional</sup> <a name="SourceFields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.sourceFields"></a>

```csharp
public string[] SourceFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}.

---

##### `TaskProperties`<sup>Optional</sup> <a name="TaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskProperties"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] TaskProperties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}.

---

##### `TaskType`<sup>Optional</sup> <a name="TaskType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}.

---

### CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator <a name="CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator {
    string Marketo = null,
    string S3 = null,
    string Salesforce = null,
    string ServiceNow = null,
    string Zendesk = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.marketo">Marketo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.s3">S3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.salesforce">Salesforce</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.serviceNow">ServiceNow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.zendesk">Zendesk</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}. |

---

##### `Marketo`<sup>Optional</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.marketo"></a>

```csharp
public string Marketo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.s3"></a>

```csharp
public string S3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

##### `Salesforce`<sup>Optional</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.salesforce"></a>

```csharp
public string Salesforce { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.serviceNow"></a>

```csharp
public string ServiceNow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

##### `Zendesk`<sup>Optional</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.zendesk"></a>

```csharp
public string Zendesk { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

### CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties {
    string OperatorPropertyKey = null,
    string Property = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.operatorPropertyKey">OperatorPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.property">Property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}. |

---

##### `OperatorPropertyKey`<sup>Optional</sup> <a name="OperatorPropertyKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.operatorPropertyKey"></a>

```csharp
public string OperatorPropertyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}.

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.property"></a>

```csharp
public string Property { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfig <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTriggerConfig {
    CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties TriggerProperties = null,
    string TriggerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerProperties">TriggerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerType">TriggerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}. |

---

##### `TriggerProperties`<sup>Optional</sup> <a name="TriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerProperties"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties TriggerProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}.

---

##### `TriggerType`<sup>Optional</sup> <a name="TriggerType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerType"></a>

```csharp
public string TriggerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties {
    CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled Scheduled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.property.scheduled">Scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}. |

---

##### `Scheduled`<sup>Optional</sup> <a name="Scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.property.scheduled"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled Scheduled { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled {
    string DataPullMode = null,
    double FirstExecutionFrom = null,
    double ScheduleEndTime = null,
    string ScheduleExpression = null,
    double ScheduleOffset = null,
    double ScheduleStartTime = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.dataPullMode">DataPullMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime">ScheduleEndTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleOffset">ScheduleOffset</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime">ScheduleStartTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}. |

---

##### `DataPullMode`<sup>Optional</sup> <a name="DataPullMode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.dataPullMode"></a>

```csharp
public string DataPullMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}.

---

##### `FirstExecutionFrom`<sup>Optional</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.firstExecutionFrom"></a>

```csharp
public double FirstExecutionFrom { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}.

---

##### `ScheduleEndTime`<sup>Optional</sup> <a name="ScheduleEndTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime"></a>

```csharp
public double ScheduleEndTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}.

---

##### `ScheduleOffset`<sup>Optional</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleOffset"></a>

```csharp
public double ScheduleOffset { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}.

---

##### `ScheduleStartTime`<sup>Optional</sup> <a name="ScheduleStartTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime"></a>

```csharp
public double ScheduleStartTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}.

---

### CustomerprofilesIntegrationObjectTypeNames <a name="CustomerprofilesIntegrationObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationObjectTypeNames {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}.

---

### CustomerprofilesIntegrationTags <a name="CustomerprofilesIntegrationTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesIntegrationFlowDefinitionOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig">PutSourceFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig">PutTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetFlowName">ResetFlowName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetKmsArn">ResetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetSourceFlowConfig">ResetSourceFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTriggerConfig">ResetTriggerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceFlowConfig` <a name="PutSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig"></a>

```csharp
private void PutSourceFlowConfig(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks"></a>

```csharp
private void PutTasks(IResolvable|CustomerprofilesIntegrationFlowDefinitionTasks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]

---

##### `PutTriggerConfig` <a name="PutTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig"></a>

```csharp
private void PutTriggerConfig(CustomerprofilesIntegrationFlowDefinitionTriggerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowName` <a name="ResetFlowName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetFlowName"></a>

```csharp
private void ResetFlowName()
```

##### `ResetKmsArn` <a name="ResetKmsArn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetKmsArn"></a>

```csharp
private void ResetKmsArn()
```

##### `ResetSourceFlowConfig` <a name="ResetSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetSourceFlowConfig"></a>

```csharp
private void ResetSourceFlowConfig()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTasks"></a>

```csharp
private void ResetTasks()
```

##### `ResetTriggerConfig` <a name="ResetTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTriggerConfig"></a>

```csharp
private void ResetTriggerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig">SourceFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList">CustomerprofilesIntegrationFlowDefinitionTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig">TriggerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowNameInput">FlowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArnInput">KmsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfigInput">SourceFlowConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasksInput">TasksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfigInput">TriggerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName">FlowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn">KmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceFlowConfig`<sup>Required</sup> <a name="SourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference SourceFlowConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTasksList Tasks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList">CustomerprofilesIntegrationFlowDefinitionTasksList</a>

---

##### `TriggerConfig`<sup>Required</sup> <a name="TriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference TriggerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowNameInput`<sup>Optional</sup> <a name="FlowNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowNameInput"></a>

```csharp
public string FlowNameInput { get; }
```

- *Type:* string

---

##### `KmsArnInput`<sup>Optional</sup> <a name="KmsArnInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArnInput"></a>

```csharp
public string KmsArnInput { get; }
```

- *Type:* string

---

##### `SourceFlowConfigInput`<sup>Optional</sup> <a name="SourceFlowConfigInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfigInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig SourceFlowConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasksInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasks[] TasksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]

---

##### `TriggerConfigInput`<sup>Optional</sup> <a name="TriggerConfigInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfigInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTriggerConfig TriggerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FlowName`<sup>Required</sup> <a name="FlowName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName"></a>

```csharp
public string FlowName { get; }
```

- *Type:* string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn"></a>

```csharp
public string KmsArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resetDatetimeTypeFieldName">ResetDatetimeTypeFieldName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatetimeTypeFieldName` <a name="ResetDatetimeTypeFieldName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resetDatetimeTypeFieldName"></a>

```csharp
private void ResetDatetimeTypeFieldName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldNameInput">DatetimeTypeFieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName">DatetimeTypeFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatetimeTypeFieldNameInput`<sup>Optional</sup> <a name="DatetimeTypeFieldNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldNameInput"></a>

```csharp
public string DatetimeTypeFieldNameInput { get; }
```

- *Type:* string

---

##### `DatetimeTypeFieldName`<sup>Required</sup> <a name="DatetimeTypeFieldName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName"></a>

```csharp
public string DatetimeTypeFieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig">PutIncrementalPullConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties">PutSourceConnectorProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorProfileName">ResetConnectorProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorType">ResetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetIncrementalPullConfig">ResetIncrementalPullConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetSourceConnectorProperties">ResetSourceConnectorProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncrementalPullConfig` <a name="PutIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig"></a>

```csharp
private void PutIncrementalPullConfig(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---

##### `PutSourceConnectorProperties` <a name="PutSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties"></a>

```csharp
private void PutSourceConnectorProperties(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---

##### `ResetConnectorProfileName` <a name="ResetConnectorProfileName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorProfileName"></a>

```csharp
private void ResetConnectorProfileName()
```

##### `ResetConnectorType` <a name="ResetConnectorType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorType"></a>

```csharp
private void ResetConnectorType()
```

##### `ResetIncrementalPullConfig` <a name="ResetIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetIncrementalPullConfig"></a>

```csharp
private void ResetIncrementalPullConfig()
```

##### `ResetSourceConnectorProperties` <a name="ResetSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetSourceConnectorProperties"></a>

```csharp
private void ResetSourceConnectorProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig">IncrementalPullConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties">SourceConnectorProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileNameInput">ConnectorProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfigInput">IncrementalPullConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorPropertiesInput">SourceConnectorPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName">ConnectorProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncrementalPullConfig`<sup>Required</sup> <a name="IncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference IncrementalPullConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a>

---

##### `SourceConnectorProperties`<sup>Required</sup> <a name="SourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference SourceConnectorProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a>

---

##### `ConnectorProfileNameInput`<sup>Optional</sup> <a name="ConnectorProfileNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileNameInput"></a>

```csharp
public string ConnectorProfileNameInput { get; }
```

- *Type:* string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorTypeInput"></a>

```csharp
public string ConnectorTypeInput { get; }
```

- *Type:* string

---

##### `IncrementalPullConfigInput`<sup>Optional</sup> <a name="IncrementalPullConfigInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfigInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig IncrementalPullConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---

##### `SourceConnectorPropertiesInput`<sup>Optional</sup> <a name="SourceConnectorPropertiesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorPropertiesInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties SourceConnectorPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---

##### `ConnectorProfileName`<sup>Required</sup> <a name="ConnectorProfileName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName"></a>

```csharp
public string ConnectorProfileName { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo">PutMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce">PutSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk">PutZendesk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetMarketo">ResetMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetSalesforce">ResetSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetZendesk">ResetZendesk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMarketo` <a name="PutMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo"></a>

```csharp
private void PutMarketo(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3"></a>

```csharp
private void PutS3(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---

##### `PutSalesforce` <a name="PutSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce"></a>

```csharp
private void PutSalesforce(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---

##### `PutZendesk` <a name="PutZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk"></a>

```csharp
private void PutZendesk(CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---

##### `ResetMarketo` <a name="ResetMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetMarketo"></a>

```csharp
private void ResetMarketo()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```

##### `ResetSalesforce` <a name="ResetSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetSalesforce"></a>

```csharp
private void ResetSalesforce()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetZendesk` <a name="ResetZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetZendesk"></a>

```csharp
private void ResetZendesk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo">Marketo</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce">Salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk">Zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketoInput">MarketoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforceInput">SalesforceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendeskInput">ZendeskInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Marketo`<sup>Required</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference Marketo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a>

---

##### `Salesforce`<sup>Required</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference Salesforce { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a>

---

##### `Zendesk`<sup>Required</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference Zendesk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a>

---

##### `MarketoInput`<sup>Optional</sup> <a name="MarketoInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketoInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo MarketoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3Input"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---

##### `SalesforceInput`<sup>Optional</sup> <a name="SalesforceInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforceInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce SalesforceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---

##### `ZendeskInput`<sup>Optional</sup> <a name="ZendeskInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendeskInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk ZendeskInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetEnableDynamicFieldUpdate">ResetEnableDynamicFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetIncludeDeletedRecords">ResetIncludeDeletedRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDynamicFieldUpdate` <a name="ResetEnableDynamicFieldUpdate" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetEnableDynamicFieldUpdate"></a>

```csharp
private void ResetEnableDynamicFieldUpdate()
```

##### `ResetIncludeDeletedRecords` <a name="ResetIncludeDeletedRecords" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetIncludeDeletedRecords"></a>

```csharp
private void ResetIncludeDeletedRecords()
```

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdateInput">EnableDynamicFieldUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecordsInput">IncludeDeletedRecordsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate">EnableDynamicFieldUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords">IncludeDeletedRecords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableDynamicFieldUpdateInput`<sup>Optional</sup> <a name="EnableDynamicFieldUpdateInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdateInput"></a>

```csharp
public bool|IResolvable EnableDynamicFieldUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeDeletedRecordsInput`<sup>Optional</sup> <a name="IncludeDeletedRecordsInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecordsInput"></a>

```csharp
public bool|IResolvable IncludeDeletedRecordsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `EnableDynamicFieldUpdate`<sup>Required</sup> <a name="EnableDynamicFieldUpdate" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate"></a>

```csharp
public bool|IResolvable EnableDynamicFieldUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeDeletedRecords`<sup>Required</sup> <a name="IncludeDeletedRecords" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords"></a>

```csharp
public bool|IResolvable IncludeDeletedRecords { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---


### CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetMarketo">ResetMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetSalesforce">ResetSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetZendesk">ResetZendesk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMarketo` <a name="ResetMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetMarketo"></a>

```csharp
private void ResetMarketo()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```

##### `ResetSalesforce` <a name="ResetSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetSalesforce"></a>

```csharp
private void ResetSalesforce()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetZendesk` <a name="ResetZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetZendesk"></a>

```csharp
private void ResetZendesk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketoInput">MarketoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3Input">S3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforceInput">SalesforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendeskInput">ZendeskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo">Marketo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3">S3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce">Salesforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow">ServiceNow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk">Zendesk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MarketoInput`<sup>Optional</sup> <a name="MarketoInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketoInput"></a>

```csharp
public string MarketoInput { get; }
```

- *Type:* string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3Input"></a>

```csharp
public string S3Input { get; }
```

- *Type:* string

---

##### `SalesforceInput`<sup>Optional</sup> <a name="SalesforceInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforceInput"></a>

```csharp
public string SalesforceInput { get; }
```

- *Type:* string

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNowInput"></a>

```csharp
public string ServiceNowInput { get; }
```

- *Type:* string

---

##### `ZendeskInput`<sup>Optional</sup> <a name="ZendeskInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendeskInput"></a>

```csharp
public string ZendeskInput { get; }
```

- *Type:* string

---

##### `Marketo`<sup>Required</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo"></a>

```csharp
public string Marketo { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3"></a>

```csharp
public string S3 { get; }
```

- *Type:* string

---

##### `Salesforce`<sup>Required</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce"></a>

```csharp
public string Salesforce { get; }
```

- *Type:* string

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow"></a>

```csharp
public string ServiceNow { get; }
```

- *Type:* string

---

##### `Zendesk`<sup>Required</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk"></a>

```csharp
public string Zendesk { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---


### CustomerprofilesIntegrationFlowDefinitionTasksList <a name="CustomerprofilesIntegrationFlowDefinitionTasksList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get"></a>

```csharp
private CustomerprofilesIntegrationFlowDefinitionTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>[]

---


### CustomerprofilesIntegrationFlowDefinitionTasksOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator">PutConnectorOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties">PutTaskProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetConnectorOperator">ResetConnectorOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetDestinationField">ResetDestinationField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetSourceFields">ResetSourceFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskProperties">ResetTaskProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskType">ResetTaskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectorOperator` <a name="PutConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator"></a>

```csharp
private void PutConnectorOperator(CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---

##### `PutTaskProperties` <a name="PutTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties"></a>

```csharp
private void PutTaskProperties(IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]

---

##### `ResetConnectorOperator` <a name="ResetConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetConnectorOperator"></a>

```csharp
private void ResetConnectorOperator()
```

##### `ResetDestinationField` <a name="ResetDestinationField" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetDestinationField"></a>

```csharp
private void ResetDestinationField()
```

##### `ResetSourceFields` <a name="ResetSourceFields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetSourceFields"></a>

```csharp
private void ResetSourceFields()
```

##### `ResetTaskProperties` <a name="ResetTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskProperties"></a>

```csharp
private void ResetTaskProperties()
```

##### `ResetTaskType` <a name="ResetTaskType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskType"></a>

```csharp
private void ResetTaskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator">ConnectorOperator</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties">TaskProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperatorInput">ConnectorOperatorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationFieldInput">DestinationFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFieldsInput">SourceFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskPropertiesInput">TaskPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField">DestinationField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields">SourceFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorOperator`<sup>Required</sup> <a name="ConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference ConnectorOperator { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a>

---

##### `TaskProperties`<sup>Required</sup> <a name="TaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList TaskProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a>

---

##### `ConnectorOperatorInput`<sup>Optional</sup> <a name="ConnectorOperatorInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperatorInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator ConnectorOperatorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---

##### `DestinationFieldInput`<sup>Optional</sup> <a name="DestinationFieldInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationFieldInput"></a>

```csharp
public string DestinationFieldInput { get; }
```

- *Type:* string

---

##### `SourceFieldsInput`<sup>Optional</sup> <a name="SourceFieldsInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFieldsInput"></a>

```csharp
public string[] SourceFieldsInput { get; }
```

- *Type:* string[]

---

##### `TaskPropertiesInput`<sup>Optional</sup> <a name="TaskPropertiesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskPropertiesInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] TaskPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `DestinationField`<sup>Required</sup> <a name="DestinationField" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField"></a>

```csharp
public string DestinationField { get; }
```

- *Type:* string

---

##### `SourceFields`<sup>Required</sup> <a name="SourceFields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields"></a>

```csharp
public string[] SourceFields { get; }
```

- *Type:* string[]

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks">CustomerprofilesIntegrationFlowDefinitionTasks</a>

---


### CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get"></a>

```csharp
private CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>[]

---


### CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetOperatorPropertyKey">ResetOperatorPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperatorPropertyKey` <a name="ResetOperatorPropertyKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetOperatorPropertyKey"></a>

```csharp
private void ResetOperatorPropertyKey()
```

##### `ResetProperty` <a name="ResetProperty" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetProperty"></a>

```csharp
private void ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKeyInput">OperatorPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey">OperatorPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property">Property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorPropertyKeyInput`<sup>Optional</sup> <a name="OperatorPropertyKeyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKeyInput"></a>

```csharp
public string OperatorPropertyKeyInput { get; }
```

- *Type:* string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.propertyInput"></a>

```csharp
public string PropertyInput { get; }
```

- *Type:* string

---

##### `OperatorPropertyKey`<sup>Required</sup> <a name="OperatorPropertyKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey"></a>

```csharp
public string OperatorPropertyKey { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property"></a>

```csharp
public string Property { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties">CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties</a>

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties">PutTriggerProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerProperties">ResetTriggerProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerType">ResetTriggerType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerProperties` <a name="PutTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties"></a>

```csharp
private void PutTriggerProperties(CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---

##### `ResetTriggerProperties` <a name="ResetTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerProperties"></a>

```csharp
private void ResetTriggerProperties()
```

##### `ResetTriggerType` <a name="ResetTriggerType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerType"></a>

```csharp
private void ResetTriggerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties">TriggerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerPropertiesInput">TriggerPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType">TriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerProperties`<sup>Required</sup> <a name="TriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference TriggerProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a>

---

##### `TriggerPropertiesInput`<sup>Optional</sup> <a name="TriggerPropertiesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerPropertiesInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties TriggerPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerTypeInput"></a>

```csharp
public string TriggerTypeInput { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType"></a>

```csharp
public string TriggerType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTriggerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled">PutScheduled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resetScheduled">ResetScheduled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduled` <a name="PutScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled"></a>

```csharp
private void PutScheduled(CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---

##### `ResetScheduled` <a name="ResetScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resetScheduled"></a>

```csharp
private void ResetScheduled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled">Scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduledInput">ScheduledInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scheduled`<sup>Required</sup> <a name="Scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled"></a>

```csharp
public CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference Scheduled { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a>

---

##### `ScheduledInput`<sup>Optional</sup> <a name="ScheduledInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduledInput"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled ScheduledInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetDataPullMode">ResetDataPullMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetFirstExecutionFrom">ResetFirstExecutionFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleEndTime">ResetScheduleEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleOffset">ResetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleStartTime">ResetScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataPullMode` <a name="ResetDataPullMode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetDataPullMode"></a>

```csharp
private void ResetDataPullMode()
```

##### `ResetFirstExecutionFrom` <a name="ResetFirstExecutionFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetFirstExecutionFrom"></a>

```csharp
private void ResetFirstExecutionFrom()
```

##### `ResetScheduleEndTime` <a name="ResetScheduleEndTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleEndTime"></a>

```csharp
private void ResetScheduleEndTime()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetScheduleOffset` <a name="ResetScheduleOffset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleOffset"></a>

```csharp
private void ResetScheduleOffset()
```

##### `ResetScheduleStartTime` <a name="ResetScheduleStartTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleStartTime"></a>

```csharp
private void ResetScheduleStartTime()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullModeInput">DataPullModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFromInput">FirstExecutionFromInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTimeInput">ScheduleEndTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffsetInput">ScheduleOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTimeInput">ScheduleStartTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode">DataPullMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime">ScheduleEndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset">ScheduleOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime">ScheduleStartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataPullModeInput`<sup>Optional</sup> <a name="DataPullModeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullModeInput"></a>

```csharp
public string DataPullModeInput { get; }
```

- *Type:* string

---

##### `FirstExecutionFromInput`<sup>Optional</sup> <a name="FirstExecutionFromInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFromInput"></a>

```csharp
public double FirstExecutionFromInput { get; }
```

- *Type:* double

---

##### `ScheduleEndTimeInput`<sup>Optional</sup> <a name="ScheduleEndTimeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTimeInput"></a>

```csharp
public double ScheduleEndTimeInput { get; }
```

- *Type:* double

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleOffsetInput`<sup>Optional</sup> <a name="ScheduleOffsetInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffsetInput"></a>

```csharp
public double ScheduleOffsetInput { get; }
```

- *Type:* double

---

##### `ScheduleStartTimeInput`<sup>Optional</sup> <a name="ScheduleStartTimeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTimeInput"></a>

```csharp
public double ScheduleStartTimeInput { get; }
```

- *Type:* double

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `DataPullMode`<sup>Required</sup> <a name="DataPullMode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode"></a>

```csharp
public string DataPullMode { get; }
```

- *Type:* string

---

##### `FirstExecutionFrom`<sup>Required</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom"></a>

```csharp
public double FirstExecutionFrom { get; }
```

- *Type:* double

---

##### `ScheduleEndTime`<sup>Required</sup> <a name="ScheduleEndTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime"></a>

```csharp
public double ScheduleEndTime { get; }
```

- *Type:* double

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleOffset`<sup>Required</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset"></a>

```csharp
public double ScheduleOffset { get; }
```

- *Type:* double

---

##### `ScheduleStartTime`<sup>Required</sup> <a name="ScheduleStartTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime"></a>

```csharp
public double ScheduleStartTime { get; }
```

- *Type:* double

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---


### CustomerprofilesIntegrationObjectTypeNamesList <a name="CustomerprofilesIntegrationObjectTypeNamesList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationObjectTypeNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get"></a>

```csharp
private CustomerprofilesIntegrationObjectTypeNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationObjectTypeNames[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>[]

---


### CustomerprofilesIntegrationObjectTypeNamesOutputReference <a name="CustomerprofilesIntegrationObjectTypeNamesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationObjectTypeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationObjectTypeNames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames">CustomerprofilesIntegrationObjectTypeNames</a>

---


### CustomerprofilesIntegrationTagsList <a name="CustomerprofilesIntegrationTagsList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get"></a>

```csharp
private CustomerprofilesIntegrationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>[]

---


### CustomerprofilesIntegrationTagsOutputReference <a name="CustomerprofilesIntegrationTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesIntegrationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesIntegrationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags">CustomerprofilesIntegrationTags</a>

---



