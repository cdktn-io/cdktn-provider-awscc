# `dataAwsccMedialiveMultiplexprogram` Submodule <a name="`dataAwsccMedialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveMultiplexprogram <a name="DataAwsccMedialiveMultiplexprogram" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogram(Construct Scope, string Id, DataAwsccMedialiveMultiplexprogramConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig">DataAwsccMedialiveMultiplexprogramConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig">DataAwsccMedialiveMultiplexprogramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveMultiplexprogram.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveMultiplexprogram.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveMultiplexprogram.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveMultiplexprogram.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveMultiplexprogram to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexId">MultiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.packetIdentifiersMap">PacketIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.pipelineDetails">PipelineDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList">DataAwsccMedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.programName">ProgramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `MultiplexId`<sup>Required</sup> <a name="MultiplexId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexId"></a>

```csharp
public string MultiplexId { get; }
```

- *Type:* string

---

##### `MultiplexProgramSettings`<sup>Required</sup> <a name="MultiplexProgramSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference MultiplexProgramSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `PacketIdentifiersMap`<sup>Required</sup> <a name="PacketIdentifiersMap" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference PacketIdentifiersMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `PipelineDetails`<sup>Required</sup> <a name="PipelineDetails" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.pipelineDetails"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramPipelineDetailsList PipelineDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList">DataAwsccMedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```csharp
public string PreferredChannelPipeline { get; }
```

- *Type:* string

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.programName"></a>

```csharp
public string ProgramName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveMultiplexprogramConfig <a name="DataAwsccMedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplexprogram#id DataAwsccMedialiveMultiplexprogram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings {

};
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor {

};
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings {

};
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings {

};
```


### DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap <a name="DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap {

};
```


### DataAwsccMedialiveMultiplexprogramPipelineDetails <a name="DataAwsccMedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramPipelineDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">ProgramNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">ServiceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">VideoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```csharp
public string PreferredChannelPipeline { get; }
```

- *Type:* string

---

##### `ProgramNumber`<sup>Required</sup> <a name="ProgramNumber" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```csharp
public double ProgramNumber { get; }
```

- *Type:* double

---

##### `ServiceDescriptor`<sup>Required</sup> <a name="ServiceDescriptor" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference ServiceDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `VideoSettings`<sup>Required</sup> <a name="VideoSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference VideoSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">ConstantBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">StatmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantBitrate`<sup>Required</sup> <a name="ConstantBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```csharp
public double ConstantBitrate { get; }
```

- *Type:* double

---

##### `StatmuxSettings`<sup>Required</sup> <a name="StatmuxSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference StatmuxSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">MinimumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; }
```

- *Type:* double

---

##### `MinimumBitrate`<sup>Required</sup> <a name="MinimumBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```csharp
public double MinimumBitrate { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---


### DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">AudioPids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">DvbSubPids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">DvbTeletextPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">EtvPlatformPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">EtvSignalPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">KlvDataPids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">PcrPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">PmtPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">PrivateMetadataPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">Scte27Pids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">Scte35Pid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">TimedMetadataPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">VideoPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioPids`<sup>Required</sup> <a name="AudioPids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```csharp
public double[] AudioPids { get; }
```

- *Type:* double[]

---

##### `DvbSubPids`<sup>Required</sup> <a name="DvbSubPids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```csharp
public double[] DvbSubPids { get; }
```

- *Type:* double[]

---

##### `DvbTeletextPid`<sup>Required</sup> <a name="DvbTeletextPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```csharp
public double DvbTeletextPid { get; }
```

- *Type:* double

---

##### `EtvPlatformPid`<sup>Required</sup> <a name="EtvPlatformPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```csharp
public double EtvPlatformPid { get; }
```

- *Type:* double

---

##### `EtvSignalPid`<sup>Required</sup> <a name="EtvSignalPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```csharp
public double EtvSignalPid { get; }
```

- *Type:* double

---

##### `KlvDataPids`<sup>Required</sup> <a name="KlvDataPids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```csharp
public double[] KlvDataPids { get; }
```

- *Type:* double[]

---

##### `PcrPid`<sup>Required</sup> <a name="PcrPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```csharp
public double PcrPid { get; }
```

- *Type:* double

---

##### `PmtPid`<sup>Required</sup> <a name="PmtPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```csharp
public double PmtPid { get; }
```

- *Type:* double

---

##### `PrivateMetadataPid`<sup>Required</sup> <a name="PrivateMetadataPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```csharp
public double PrivateMetadataPid { get; }
```

- *Type:* double

---

##### `Scte27Pids`<sup>Required</sup> <a name="Scte27Pids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```csharp
public double[] Scte27Pids { get; }
```

- *Type:* double[]

---

##### `Scte35Pid`<sup>Required</sup> <a name="Scte35Pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```csharp
public double Scte35Pid { get; }
```

- *Type:* double

---

##### `TimedMetadataPid`<sup>Required</sup> <a name="TimedMetadataPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```csharp
public double TimedMetadataPid { get; }
```

- *Type:* double

---

##### `VideoPid`<sup>Required</sup> <a name="VideoPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```csharp
public double VideoPid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap</a>

---


### DataAwsccMedialiveMultiplexprogramPipelineDetailsList <a name="DataAwsccMedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramPipelineDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get"></a>

```csharp
private DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference <a name="DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">ActiveChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails">DataAwsccMedialiveMultiplexprogramPipelineDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveChannelPipeline`<sup>Required</sup> <a name="ActiveChannelPipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```csharp
public string ActiveChannelPipeline { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveMultiplexprogramPipelineDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails">DataAwsccMedialiveMultiplexprogramPipelineDetails</a>

---



