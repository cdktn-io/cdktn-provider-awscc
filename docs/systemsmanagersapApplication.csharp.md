# `systemsmanagersapApplication` Submodule <a name="`systemsmanagersapApplication` Submodule" id="@cdktn/provider-awscc.systemsmanagersapApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemsmanagersapApplication <a name="SystemsmanagersapApplication" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplication(Construct Scope, string Id, SystemsmanagersapApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig">SystemsmanagersapApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig">SystemsmanagersapApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo">PutComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo">ResetComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn">ResetDatabaseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber">ResetSapInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid">ResetSid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentsInfo` <a name="PutComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo"></a>

```csharp
private void PutComponentsInfo(IResolvable|SystemsmanagersapApplicationComponentsInfo[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials"></a>

```csharp
private void PutCredentials(IResolvable|SystemsmanagersapApplicationCredentials[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|SystemsmanagersapApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

---

##### `ResetComponentsInfo` <a name="ResetComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo"></a>

```csharp
private void ResetComponentsInfo()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDatabaseArn` <a name="ResetDatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn"></a>

```csharp
private void ResetDatabaseArn()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetSapInstanceNumber` <a name="ResetSapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber"></a>

```csharp
private void ResetSapInstanceNumber()
```

##### `ResetSid` <a name="ResetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid"></a>

```csharp
private void ResetSid()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SystemsmanagersapApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SystemsmanagersapApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SystemsmanagersapApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SystemsmanagersapApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemsmanagersapApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemsmanagersapApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SystemsmanagersapApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo">ComponentsInfo</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput">ComponentsInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput">CredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput">DatabaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput">SapInstanceNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput">SidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn">DatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber">SapInstanceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid">Sid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComponentsInfo`<sup>Required</sup> <a name="ComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo"></a>

```csharp
public SystemsmanagersapApplicationComponentsInfoList ComponentsInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials"></a>

```csharp
public SystemsmanagersapApplicationCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags"></a>

```csharp
public SystemsmanagersapApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput"></a>

```csharp
public string ApplicationTypeInput { get; }
```

- *Type:* string

---

##### `ComponentsInfoInput`<sup>Optional</sup> <a name="ComponentsInfoInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationComponentsInfo[] ComponentsInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationCredentials[] CredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

---

##### `DatabaseArnInput`<sup>Optional</sup> <a name="DatabaseArnInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput"></a>

```csharp
public string DatabaseArnInput { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `SapInstanceNumberInput`<sup>Optional</sup> <a name="SapInstanceNumberInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput"></a>

```csharp
public string SapInstanceNumberInput { get; }
```

- *Type:* string

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput"></a>

```csharp
public string SidInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn"></a>

```csharp
public string DatabaseArn { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `SapInstanceNumber`<sup>Required</sup> <a name="SapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber"></a>

```csharp
public string SapInstanceNumber { get; }
```

- *Type:* string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemsmanagersapApplicationComponentsInfo <a name="SystemsmanagersapApplicationComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationComponentsInfo {
    string ComponentType = null,
    string Ec2InstanceId = null,
    string Sid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType">ComponentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId">Ec2InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid">Sid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |

---

##### `ComponentType`<sup>Optional</sup> <a name="ComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType"></a>

```csharp
public string ComponentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}.

---

##### `Ec2InstanceId`<sup>Optional</sup> <a name="Ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId"></a>

```csharp
public string Ec2InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}.

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid"></a>

```csharp
public string Sid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

### SystemsmanagersapApplicationConfig <a name="SystemsmanagersapApplicationConfig" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string ApplicationType,
    IResolvable|SystemsmanagersapApplicationComponentsInfo[] ComponentsInfo = null,
    IResolvable|SystemsmanagersapApplicationCredentials[] Credentials = null,
    string DatabaseArn = null,
    string[] Instances = null,
    string SapInstanceNumber = null,
    string Sid = null,
    IResolvable|SystemsmanagersapApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo">ComponentsInfo</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]</code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials">Credentials</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn">DatabaseArn</a></code> | <code>string</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances">Instances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber">SapInstanceNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid">Sid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]</code> | The tags of a SystemsManagerSAP application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType"></a>

```csharp
public string ApplicationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `ComponentsInfo`<sup>Optional</sup> <a name="ComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationComponentsInfo[] ComponentsInfo { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationCredentials[] Credentials { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `DatabaseArn`<sup>Optional</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn"></a>

```csharp
public string DatabaseArn { get; set; }
```

- *Type:* string

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `SapInstanceNumber`<sup>Optional</sup> <a name="SapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber"></a>

```csharp
public string SapInstanceNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid"></a>

```csharp
public string Sid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

### SystemsmanagersapApplicationCredentials <a name="SystemsmanagersapApplicationCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationCredentials {
    string CredentialType = null,
    string DatabaseName = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType">CredentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}. |

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}.

---

### SystemsmanagersapApplicationTags <a name="SystemsmanagersapApplicationTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#key SystemsmanagersapApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#value SystemsmanagersapApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SystemsmanagersapApplicationComponentsInfoList <a name="SystemsmanagersapApplicationComponentsInfoList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationComponentsInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get"></a>

```csharp
private SystemsmanagersapApplicationComponentsInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationComponentsInfo[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>[]

---


### SystemsmanagersapApplicationComponentsInfoOutputReference <a name="SystemsmanagersapApplicationComponentsInfoOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationComponentsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType">ResetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId">ResetEc2InstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid">ResetSid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComponentType` <a name="ResetComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType"></a>

```csharp
private void ResetComponentType()
```

##### `ResetEc2InstanceId` <a name="ResetEc2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId"></a>

```csharp
private void ResetEc2InstanceId()
```

##### `ResetSid` <a name="ResetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid"></a>

```csharp
private void ResetSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput">ComponentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput">Ec2InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput">SidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType">ComponentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId">Ec2InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput"></a>

```csharp
public string ComponentTypeInput { get; }
```

- *Type:* string

---

##### `Ec2InstanceIdInput`<sup>Optional</sup> <a name="Ec2InstanceIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput"></a>

```csharp
public string Ec2InstanceIdInput { get; }
```

- *Type:* string

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput"></a>

```csharp
public string SidInput { get; }
```

- *Type:* string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType"></a>

```csharp
public string ComponentType { get; }
```

- *Type:* string

---

##### `Ec2InstanceId`<sup>Required</sup> <a name="Ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId"></a>

```csharp
public string Ec2InstanceId { get; }
```

- *Type:* string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationComponentsInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>

---


### SystemsmanagersapApplicationCredentialsList <a name="SystemsmanagersapApplicationCredentialsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get"></a>

```csharp
private SystemsmanagersapApplicationCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationCredentials[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>[]

---


### SystemsmanagersapApplicationCredentialsOutputReference <a name="SystemsmanagersapApplicationCredentialsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>

---


### SystemsmanagersapApplicationTagsList <a name="SystemsmanagersapApplicationTagsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get"></a>

```csharp
private SystemsmanagersapApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>[]

---


### SystemsmanagersapApplicationTagsOutputReference <a name="SystemsmanagersapApplicationTagsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SystemsmanagersapApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SystemsmanagersapApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>

---



