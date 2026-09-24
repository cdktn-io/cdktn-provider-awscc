# `elasticbeanstalkApplicationVersion` Submodule <a name="`elasticbeanstalkApplicationVersion` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplicationVersion <a name="ElasticbeanstalkApplicationVersion" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersion(Construct Scope, string Id, ElasticbeanstalkApplicationVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig">ElasticbeanstalkApplicationVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig">ElasticbeanstalkApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration">PutBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration">PutImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle">PutSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration">ResetBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration">ResetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess">ResetProcess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle">ResetSourceBundle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBuildConfiguration` <a name="PutBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration"></a>

```csharp
private void PutBuildConfiguration(ElasticbeanstalkApplicationVersionBuildConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `PutImageConfiguration` <a name="PutImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration"></a>

```csharp
private void PutImageConfiguration(ElasticbeanstalkApplicationVersionImageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `PutSourceBundle` <a name="PutSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle"></a>

```csharp
private void PutSourceBundle(ElasticbeanstalkApplicationVersionSourceBundle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `ResetBuildConfiguration` <a name="ResetBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration"></a>

```csharp
private void ResetBuildConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetImageConfiguration` <a name="ResetImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration"></a>

```csharp
private void ResetImageConfiguration()
```

##### `ResetProcess` <a name="ResetProcess" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess"></a>

```csharp
private void ResetProcess()
```

##### `ResetSourceBundle` <a name="ResetSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle"></a>

```csharp
private void ResetSourceBundle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkApplicationVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkApplicationVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkApplicationVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkApplicationVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticbeanstalkApplicationVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticbeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId">ApplicationVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration">BuildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle">SourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput">BuildConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput">ImageConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput">ProcessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput">SourceBundleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process">Process</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationVersionId`<sup>Required</sup> <a name="ApplicationVersionId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId"></a>

```csharp
public string ApplicationVersionId { get; }
```

- *Type:* string

---

##### `BuildConfiguration`<sup>Required</sup> <a name="BuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration"></a>

```csharp
public ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference BuildConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration"></a>

```csharp
public ElasticbeanstalkApplicationVersionImageConfigurationOutputReference ImageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a>

---

##### `SourceBundle`<sup>Required</sup> <a name="SourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle"></a>

```csharp
public ElasticbeanstalkApplicationVersionSourceBundleOutputReference SourceBundle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `BuildConfigurationInput`<sup>Optional</sup> <a name="BuildConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionBuildConfiguration BuildConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ImageConfigurationInput`<sup>Optional</sup> <a name="ImageConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionImageConfiguration ImageConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `ProcessInput`<sup>Optional</sup> <a name="ProcessInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput"></a>

```csharp
public bool|IResolvable ProcessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceBundleInput`<sup>Optional</sup> <a name="SourceBundleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionSourceBundle SourceBundleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process"></a>

```csharp
public bool|IResolvable Process { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationVersionBuildConfiguration <a name="ElasticbeanstalkApplicationVersionBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionBuildConfiguration {
    string ArtifactName = null,
    string CodeBuildServiceRole = null,
    string ComputeType = null,
    string Image = null,
    double TimeoutInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName">ArtifactName</a></code> | <code>string</code> | The name of the build artifact. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole">CodeBuildServiceRole</a></code> | <code>string</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType">ComputeType</a></code> | <code>string</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image">Image</a></code> | <code>string</code> | The CodeBuild image used for the build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | The timeout for the CodeBuild build, in minutes. |

---

##### `ArtifactName`<sup>Optional</sup> <a name="ArtifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName"></a>

```csharp
public string ArtifactName { get; set; }
```

- *Type:* string

The name of the build artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#artifact_name ElasticbeanstalkApplicationVersion#artifact_name}

---

##### `CodeBuildServiceRole`<sup>Optional</sup> <a name="CodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole"></a>

```csharp
public string CodeBuildServiceRole { get; set; }
```

- *Type:* string

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType"></a>

```csharp
public string ComputeType { get; set; }
```

- *Type:* string

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The CodeBuild image used for the build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image ElasticbeanstalkApplicationVersion#image}

---

##### `TimeoutInMinutes`<sup>Optional</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; set; }
```

- *Type:* double

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

### ElasticbeanstalkApplicationVersionConfig <a name="ElasticbeanstalkApplicationVersionConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationName,
    ElasticbeanstalkApplicationVersionBuildConfiguration BuildConfiguration = null,
    string Description = null,
    ElasticbeanstalkApplicationVersionImageConfiguration ImageConfiguration = null,
    bool|IResolvable Process = null,
    ElasticbeanstalkApplicationVersionSourceBundle SourceBundle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | The name of the Elastic Beanstalk application that is associated with this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration">BuildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | Settings for an AWS CodeBuild build that packages and builds an application version from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description">Description</a></code> | <code>string</code> | A description of this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | Configuration for image-based application versions. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process">Process</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle">SourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | The Amazon S3 bucket and key that identify the location of the source bundle for this version. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

The name of the Elastic Beanstalk application that is associated with this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name ElasticbeanstalkApplicationVersion#application_name}

---

##### `BuildConfiguration`<sup>Optional</sup> <a name="BuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration"></a>

```csharp
public ElasticbeanstalkApplicationVersionBuildConfiguration BuildConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

Settings for an AWS CodeBuild build that packages and builds an application version from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration ElasticbeanstalkApplicationVersion#build_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description ElasticbeanstalkApplicationVersion#description}

---

##### `ImageConfiguration`<sup>Optional</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration"></a>

```csharp
public ElasticbeanstalkApplicationVersionImageConfiguration ImageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

Configuration for image-based application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration ElasticbeanstalkApplicationVersion#image_configuration}

---

##### `Process`<sup>Optional</sup> <a name="Process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process"></a>

```csharp
public bool|IResolvable Process { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process ElasticbeanstalkApplicationVersion#process}

---

##### `SourceBundle`<sup>Optional</sup> <a name="SourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle"></a>

```csharp
public ElasticbeanstalkApplicationVersionSourceBundle SourceBundle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

The Amazon S3 bucket and key that identify the location of the source bundle for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle ElasticbeanstalkApplicationVersion#source_bundle}

---

### ElasticbeanstalkApplicationVersionImageConfiguration <a name="ElasticbeanstalkApplicationVersionImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionImageConfiguration {
    ElasticbeanstalkApplicationVersionImageConfigurationBuild BuildAttribute = null,
    ElasticbeanstalkApplicationVersionImageConfigurationSource Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | Configuration for building a container image from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | The container image source for this version, as an ECR image URI. |

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute"></a>

```csharp
public ElasticbeanstalkApplicationVersionImageConfigurationBuild BuildAttribute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

Configuration for building a container image from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build ElasticbeanstalkApplicationVersion#build}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source"></a>

```csharp
public ElasticbeanstalkApplicationVersionImageConfigurationSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

The container image source for this version, as an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source ElasticbeanstalkApplicationVersion#source}

---

### ElasticbeanstalkApplicationVersionImageConfigurationBuild <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuild" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionImageConfigurationBuild {
    string Architecture = null,
    string Buildpack = null,
    string CodeBuildServiceRole = null,
    string ComputeType = null,
    string DockerfileLocation = null,
    double TimeoutInMinutes = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture">Architecture</a></code> | <code>string</code> | The target architecture for the built container image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack">Buildpack</a></code> | <code>string</code> | The buildpack to use for building the image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole">CodeBuildServiceRole</a></code> | <code>string</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType">ComputeType</a></code> | <code>string</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation">DockerfileLocation</a></code> | <code>string</code> | The path to the Dockerfile, relative to the source root. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | The timeout for the CodeBuild build, in minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type">Type</a></code> | <code>string</code> | The type of image build: docker or buildpack. |

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

The target architecture for the built container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#architecture ElasticbeanstalkApplicationVersion#architecture}

---

##### `Buildpack`<sup>Optional</sup> <a name="Buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack"></a>

```csharp
public string Buildpack { get; set; }
```

- *Type:* string

The buildpack to use for building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#buildpack ElasticbeanstalkApplicationVersion#buildpack}

---

##### `CodeBuildServiceRole`<sup>Optional</sup> <a name="CodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole"></a>

```csharp
public string CodeBuildServiceRole { get; set; }
```

- *Type:* string

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType"></a>

```csharp
public string ComputeType { get; set; }
```

- *Type:* string

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `DockerfileLocation`<sup>Optional</sup> <a name="DockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation"></a>

```csharp
public string DockerfileLocation { get; set; }
```

- *Type:* string

The path to the Dockerfile, relative to the source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#dockerfile_location ElasticbeanstalkApplicationVersion#dockerfile_location}

---

##### `TimeoutInMinutes`<sup>Optional</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; set; }
```

- *Type:* double

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of image build: docker or buildpack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#type ElasticbeanstalkApplicationVersion#type}

---

### ElasticbeanstalkApplicationVersionImageConfigurationSource <a name="ElasticbeanstalkApplicationVersionImageConfigurationSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionImageConfigurationSource {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri">Uri</a></code> | <code>string</code> | The URI of the container image, e.g. an ECR image URI. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the container image, e.g. an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#uri ElasticbeanstalkApplicationVersion#uri}

---

### ElasticbeanstalkApplicationVersionSourceBundle <a name="ElasticbeanstalkApplicationVersionSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionSourceBundle {
    string S3Bucket = null,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | The Amazon S3 bucket where the data is located. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key">S3Key</a></code> | <code>string</code> | The Amazon S3 key where the data is located. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

The Amazon S3 bucket where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_bucket ElasticbeanstalkApplicationVersion#s3_bucket}

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

The Amazon S3 key where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_key ElasticbeanstalkApplicationVersion#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName">ResetArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole">ResetCodeBuildServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes">ResetTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactName` <a name="ResetArtifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName"></a>

```csharp
private void ResetArtifactName()
```

##### `ResetCodeBuildServiceRole` <a name="ResetCodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole"></a>

```csharp
private void ResetCodeBuildServiceRole()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType"></a>

```csharp
private void ResetComputeType()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetTimeoutInMinutes` <a name="ResetTimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes"></a>

```csharp
private void ResetTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput">ArtifactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput">CodeBuildServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput">ComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput">TimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName">ArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole">CodeBuildServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactNameInput`<sup>Optional</sup> <a name="ArtifactNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput"></a>

```csharp
public string ArtifactNameInput { get; }
```

- *Type:* string

---

##### `CodeBuildServiceRoleInput`<sup>Optional</sup> <a name="CodeBuildServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput"></a>

```csharp
public string CodeBuildServiceRoleInput { get; }
```

- *Type:* string

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput"></a>

```csharp
public string ComputeTypeInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `TimeoutInMinutesInput`<sup>Optional</sup> <a name="TimeoutInMinutesInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```csharp
public double TimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `ArtifactName`<sup>Required</sup> <a name="ArtifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName"></a>

```csharp
public string ArtifactName { get; }
```

- *Type:* string

---

##### `CodeBuildServiceRole`<sup>Required</sup> <a name="CodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole"></a>

```csharp
public string CodeBuildServiceRole { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionBuildConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack">ResetBuildpack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole">ResetCodeBuildServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation">ResetDockerfileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes">ResetTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture"></a>

```csharp
private void ResetArchitecture()
```

##### `ResetBuildpack` <a name="ResetBuildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack"></a>

```csharp
private void ResetBuildpack()
```

##### `ResetCodeBuildServiceRole` <a name="ResetCodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole"></a>

```csharp
private void ResetCodeBuildServiceRole()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType"></a>

```csharp
private void ResetComputeType()
```

##### `ResetDockerfileLocation` <a name="ResetDockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation"></a>

```csharp
private void ResetDockerfileLocation()
```

##### `ResetTimeoutInMinutes` <a name="ResetTimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes"></a>

```csharp
private void ResetTimeoutInMinutes()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput">BuildpackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput">CodeBuildServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput">ComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput">DockerfileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput">TimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack">Buildpack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole">CodeBuildServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation">DockerfileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `BuildpackInput`<sup>Optional</sup> <a name="BuildpackInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput"></a>

```csharp
public string BuildpackInput { get; }
```

- *Type:* string

---

##### `CodeBuildServiceRoleInput`<sup>Optional</sup> <a name="CodeBuildServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput"></a>

```csharp
public string CodeBuildServiceRoleInput { get; }
```

- *Type:* string

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput"></a>

```csharp
public string ComputeTypeInput { get; }
```

- *Type:* string

---

##### `DockerfileLocationInput`<sup>Optional</sup> <a name="DockerfileLocationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput"></a>

```csharp
public string DockerfileLocationInput { get; }
```

- *Type:* string

---

##### `TimeoutInMinutesInput`<sup>Optional</sup> <a name="TimeoutInMinutesInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput"></a>

```csharp
public double TimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Buildpack`<sup>Required</sup> <a name="Buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack"></a>

```csharp
public string Buildpack { get; }
```

- *Type:* string

---

##### `CodeBuildServiceRole`<sup>Required</sup> <a name="CodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole"></a>

```csharp
public string CodeBuildServiceRole { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `DockerfileLocation`<sup>Required</sup> <a name="DockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation"></a>

```csharp
public string DockerfileLocation { get; }
```

- *Type:* string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationBuild InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionImageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute">PutBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBuildAttribute` <a name="PutBuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute"></a>

```csharp
private void PutBuildAttribute(ElasticbeanstalkApplicationVersionImageConfigurationBuild Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource"></a>

```csharp
private void PutSource(ElasticbeanstalkApplicationVersionImageConfigurationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute"></a>

```csharp
private void ResetBuildAttribute()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput">BuildAttributeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute"></a>

```csharp
public ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference BuildAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source"></a>

```csharp
public ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a>

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationBuild BuildAttributeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationSource SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionImageConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---


### ElasticbeanstalkApplicationVersionSourceBundleOutputReference <a name="ElasticbeanstalkApplicationVersionSourceBundleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkApplicationVersionSourceBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkApplicationVersionSourceBundle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---



