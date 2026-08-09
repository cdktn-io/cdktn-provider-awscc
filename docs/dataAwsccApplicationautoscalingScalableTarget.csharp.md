# `dataAwsccApplicationautoscalingScalableTarget` Submodule <a name="`dataAwsccApplicationautoscalingScalableTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationautoscalingScalableTarget <a name="DataAwsccApplicationautoscalingScalableTarget" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTarget(Construct Scope, string Id, DataAwsccApplicationautoscalingScalableTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig">DataAwsccApplicationautoscalingScalableTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig">DataAwsccApplicationautoscalingScalableTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationautoscalingScalableTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationautoscalingScalableTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationautoscalingScalableTarget.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApplicationautoscalingScalableTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApplicationautoscalingScalableTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApplicationautoscalingScalableTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationautoscalingScalableTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableTargetId">ScalableTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scheduledActions">ScheduledActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList">DataAwsccApplicationautoscalingScalableTargetScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference">DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; }
```

- *Type:* string

---

##### `ScalableTargetId`<sup>Required</sup> <a name="ScalableTargetId" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scalableTargetId"></a>

```csharp
public string ScalableTargetId { get; }
```

- *Type:* string

---

##### `ScheduledActions`<sup>Required</sup> <a name="ScheduledActions" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.scheduledActions"></a>

```csharp
public DataAwsccApplicationautoscalingScalableTargetScheduledActionsList ScheduledActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList">DataAwsccApplicationautoscalingScalableTargetScheduledActionsList</a>

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

##### `SuspendedState`<sup>Required</sup> <a name="SuspendedState" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.suspendedState"></a>

```csharp
public DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference SuspendedState { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference">DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationautoscalingScalableTargetConfig <a name="DataAwsccApplicationautoscalingScalableTargetConfig" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/applicationautoscaling_scalable_target#id DataAwsccApplicationautoscalingScalableTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationautoscalingScalableTargetScheduledActions <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActions" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetScheduledActions {

};
```


### DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction {

};
```


### DataAwsccApplicationautoscalingScalableTargetSuspendedState <a name="DataAwsccApplicationautoscalingScalableTargetSuspendedState" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetSuspendedState {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationautoscalingScalableTargetScheduledActionsList <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsList" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetScheduledActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.get"></a>

```csharp
private DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction">ScalableTargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName">ScheduledActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions">DataAwsccApplicationautoscalingScalableTargetScheduledActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ScalableTargetAction`<sup>Required</sup> <a name="ScalableTargetAction" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction"></a>

```csharp
public DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference ScalableTargetAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ScheduledActionName`<sup>Required</sup> <a name="ScheduledActionName" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName"></a>

```csharp
public string ScheduledActionName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationautoscalingScalableTargetScheduledActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActions">DataAwsccApplicationautoscalingScalableTargetScheduledActions</a>

---


### DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference <a name="DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---


### DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference <a name="DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState">DataAwsccApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicScalingInSuspended`<sup>Required</sup> <a name="DynamicScalingInSuspended" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```csharp
public IResolvable DynamicScalingInSuspended { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DynamicScalingOutSuspended`<sup>Required</sup> <a name="DynamicScalingOutSuspended" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```csharp
public IResolvable DynamicScalingOutSuspended { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ScheduledScalingSuspended`<sup>Required</sup> <a name="ScheduledScalingSuspended" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```csharp
public IResolvable ScheduledScalingSuspended { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApplicationautoscalingScalableTargetSuspendedState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationautoscalingScalableTarget.DataAwsccApplicationautoscalingScalableTargetSuspendedState">DataAwsccApplicationautoscalingScalableTargetSuspendedState</a>

---



