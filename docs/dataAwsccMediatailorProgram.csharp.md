# `dataAwsccMediatailorProgram` Submodule <a name="`dataAwsccMediatailorProgram` Submodule" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediatailorProgram <a name="DataAwsccMediatailorProgram" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program awscc_mediatailor_program}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgram(Construct Scope, string Id, DataAwsccMediatailorProgramConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig">DataAwsccMediatailorProgramConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig">DataAwsccMediatailorProgramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediatailorProgram resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediatailorProgram.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediatailorProgram.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediatailorProgram.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediatailorProgram.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediatailorProgram resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediatailorProgram to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediatailorProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediatailorProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList">DataAwsccMediatailorProgramAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.audienceMedia">AudienceMedia</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList">DataAwsccMediatailorProgramAudienceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference">DataAwsccMediatailorProgramClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.durationMillis">DurationMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.liveSourceName">LiveSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.programName">ProgramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference">DataAwsccMediatailorProgramScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.vodSourceName">VodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.adBreaks"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksList AdBreaks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList">DataAwsccMediatailorProgramAdBreaksList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AudienceMedia`<sup>Required</sup> <a name="AudienceMedia" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.audienceMedia"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaList AudienceMedia { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList">DataAwsccMediatailorProgramAudienceMediaList</a>

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ClipRange`<sup>Required</sup> <a name="ClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.clipRange"></a>

```csharp
public DataAwsccMediatailorProgramClipRangeOutputReference ClipRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference">DataAwsccMediatailorProgramClipRangeOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DurationMillis`<sup>Required</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.durationMillis"></a>

```csharp
public double DurationMillis { get; }
```

- *Type:* double

---

##### `LiveSourceName`<sup>Required</sup> <a name="LiveSourceName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.liveSourceName"></a>

```csharp
public string LiveSourceName { get; }
```

- *Type:* string

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.programName"></a>

```csharp
public string ProgramName { get; }
```

- *Type:* string

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduleConfiguration"></a>

```csharp
public DataAwsccMediatailorProgramScheduleConfigurationOutputReference ScheduleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference">DataAwsccMediatailorProgramScheduleConfigurationOutputReference</a>

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.scheduledStartTime"></a>

```csharp
public string ScheduledStartTime { get; }
```

- *Type:* string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; }
```

- *Type:* string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.vodSourceName"></a>

```csharp
public string VodSourceName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgram.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediatailorProgramAdBreaks <a name="DataAwsccMediatailorProgramAdBreaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaks {

};
```


### DataAwsccMediatailorProgramAdBreaksAdBreakMetadata <a name="DataAwsccMediatailorProgramAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksAdBreakMetadata {

};
```


### DataAwsccMediatailorProgramAdBreaksSlate <a name="DataAwsccMediatailorProgramAdBreaksSlate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksSlate {

};
```


### DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage <a name="DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage {

};
```


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessage <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksTimeSignalMessage {

};
```


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors {

};
```


### DataAwsccMediatailorProgramAudienceMedia <a name="DataAwsccMediatailorProgramAudienceMedia" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMedia {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMedia <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMedia" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMedia {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors {

};
```


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange {

};
```


### DataAwsccMediatailorProgramClipRange <a name="DataAwsccMediatailorProgramClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramClipRange {

};
```


### DataAwsccMediatailorProgramConfig <a name="DataAwsccMediatailorProgramConfig" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#id DataAwsccMediatailorProgram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediatailorProgramScheduleConfiguration <a name="DataAwsccMediatailorProgramScheduleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramScheduleConfiguration {

};
```


### DataAwsccMediatailorProgramScheduleConfigurationClipRange <a name="DataAwsccMediatailorProgramScheduleConfigurationClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramScheduleConfigurationClipRange {

};
```


### DataAwsccMediatailorProgramScheduleConfigurationTransition <a name="DataAwsccMediatailorProgramScheduleConfigurationTransition" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramScheduleConfigurationTransition {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList <a name="DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.get"></a>

```csharp
private DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference <a name="DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksAdBreakMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAdBreaksAdBreakMetadata</a>

---


### DataAwsccMediatailorProgramAdBreaksList <a name="DataAwsccMediatailorProgramAdBreaksList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.get"></a>

```csharp
private DataAwsccMediatailorProgramAdBreaksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAdBreaksOutputReference <a name="DataAwsccMediatailorProgramAdBreaksOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.adBreakMetadata">AdBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.offsetMillis">OffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.slate">Slate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage">SpliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.timeSignalMessage">TimeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks">DataAwsccMediatailorProgramAdBreaks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdBreakMetadata`<sup>Required</sup> <a name="AdBreakMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.adBreakMetadata"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList AdBreakMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList</a>

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `OffsetMillis`<sup>Required</sup> <a name="OffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.offsetMillis"></a>

```csharp
public double OffsetMillis { get; }
```

- *Type:* double

---

##### `Slate`<sup>Required</sup> <a name="Slate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.slate"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksSlateOutputReference Slate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAdBreaksSlateOutputReference</a>

---

##### `SpliceInsertMessage`<sup>Required</sup> <a name="SpliceInsertMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference SpliceInsertMessage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `TimeSignalMessage`<sup>Required</sup> <a name="TimeSignalMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.timeSignalMessage"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference TimeSignalMessage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaks">DataAwsccMediatailorProgramAdBreaks</a>

---


### DataAwsccMediatailorProgramAdBreaksSlateOutputReference <a name="DataAwsccMediatailorProgramAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksSlateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate">DataAwsccMediatailorProgramAdBreaksSlate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; }
```

- *Type:* string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName"></a>

```csharp
public string VodSourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksSlate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSlate">DataAwsccMediatailorProgramAdBreaksSlate</a>

---


### DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference <a name="DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum">AvailNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">AvailsExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">SpliceEventId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">UniqueProgramId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailNum`<sup>Required</sup> <a name="AvailNum" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```csharp
public double AvailNum { get; }
```

- *Type:* double

---

##### `AvailsExpected`<sup>Required</sup> <a name="AvailsExpected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```csharp
public double AvailsExpected { get; }
```

- *Type:* double

---

##### `SpliceEventId`<sup>Required</sup> <a name="SpliceEventId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```csharp
public double SpliceEventId { get; }
```

- *Type:* double

---

##### `UniqueProgramId`<sup>Required</sup> <a name="UniqueProgramId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```csharp
public double UniqueProgramId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage</a>

---


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">SegmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentationDescriptors`<sup>Required</sup> <a name="SegmentationDescriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList SegmentationDescriptors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksTimeSignalMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAdBreaksTimeSignalMessage</a>

---


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```csharp
private DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">SegmentationEventId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">SegmentationTypeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">SegmentationUpid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">SegmentationUpidType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">SegmentNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">SegmentsExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">SubSegmentNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">SubSegmentsExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentationEventId`<sup>Required</sup> <a name="SegmentationEventId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```csharp
public double SegmentationEventId { get; }
```

- *Type:* double

---

##### `SegmentationTypeId`<sup>Required</sup> <a name="SegmentationTypeId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```csharp
public double SegmentationTypeId { get; }
```

- *Type:* double

---

##### `SegmentationUpid`<sup>Required</sup> <a name="SegmentationUpid" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```csharp
public string SegmentationUpid { get; }
```

- *Type:* string

---

##### `SegmentationUpidType`<sup>Required</sup> <a name="SegmentationUpidType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```csharp
public double SegmentationUpidType { get; }
```

- *Type:* double

---

##### `SegmentNum`<sup>Required</sup> <a name="SegmentNum" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```csharp
public double SegmentNum { get; }
```

- *Type:* double

---

##### `SegmentsExpected`<sup>Required</sup> <a name="SegmentsExpected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```csharp
public double SegmentsExpected { get; }
```

- *Type:* double

---

##### `SubSegmentNum`<sup>Required</sup> <a name="SubSegmentNum" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```csharp
public double SubSegmentNum { get; }
```

- *Type:* double

---

##### `SubSegmentsExpected`<sup>Required</sup> <a name="SubSegmentsExpected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```csharp
public double SubSegmentsExpected { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get"></a>

```csharp
private DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get"></a>

```csharp
private DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata">AdBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis">OffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate">Slate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage">SpliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage">TimeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdBreakMetadata`<sup>Required</sup> <a name="AdBreakMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList AdBreakMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a>

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `OffsetMillis`<sup>Required</sup> <a name="OffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis"></a>

```csharp
public double OffsetMillis { get; }
```

- *Type:* double

---

##### `Slate`<sup>Required</sup> <a name="Slate" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference Slate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a>

---

##### `SpliceInsertMessage`<sup>Required</sup> <a name="SpliceInsertMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference SpliceInsertMessage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `TimeSignalMessage`<sup>Required</sup> <a name="TimeSignalMessage" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference TimeSignalMessage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; }
```

- *Type:* string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName"></a>

```csharp
public string VodSourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum">AvailNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">AvailsExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">SpliceEventId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">UniqueProgramId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailNum`<sup>Required</sup> <a name="AvailNum" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```csharp
public double AvailNum { get; }
```

- *Type:* double

---

##### `AvailsExpected`<sup>Required</sup> <a name="AvailsExpected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```csharp
public double AvailsExpected { get; }
```

- *Type:* double

---

##### `SpliceEventId`<sup>Required</sup> <a name="SpliceEventId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```csharp
public double SpliceEventId { get; }
```

- *Type:* double

---

##### `UniqueProgramId`<sup>Required</sup> <a name="UniqueProgramId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```csharp
public double UniqueProgramId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">SegmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentationDescriptors`<sup>Required</sup> <a name="SegmentationDescriptors" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList SegmentationDescriptors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```csharp
private DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">SegmentationEventId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">SegmentationTypeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">SegmentationUpid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">SegmentationUpidType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">SegmentNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">SegmentsExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">SubSegmentNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">SubSegmentsExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentationEventId`<sup>Required</sup> <a name="SegmentationEventId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```csharp
public double SegmentationEventId { get; }
```

- *Type:* double

---

##### `SegmentationTypeId`<sup>Required</sup> <a name="SegmentationTypeId" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```csharp
public double SegmentationTypeId { get; }
```

- *Type:* double

---

##### `SegmentationUpid`<sup>Required</sup> <a name="SegmentationUpid" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```csharp
public string SegmentationUpid { get; }
```

- *Type:* string

---

##### `SegmentationUpidType`<sup>Required</sup> <a name="SegmentationUpidType" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```csharp
public double SegmentationUpidType { get; }
```

- *Type:* double

---

##### `SegmentNum`<sup>Required</sup> <a name="SegmentNum" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```csharp
public double SegmentNum { get; }
```

- *Type:* double

---

##### `SegmentsExpected`<sup>Required</sup> <a name="SegmentsExpected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```csharp
public double SegmentsExpected { get; }
```

- *Type:* double

---

##### `SubSegmentNum`<sup>Required</sup> <a name="SubSegmentNum" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```csharp
public double SubSegmentNum { get; }
```

- *Type:* double

---

##### `SubSegmentsExpected`<sup>Required</sup> <a name="SubSegmentsExpected" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```csharp
public double SubSegmentsExpected { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndOffsetMillis`<sup>Required</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis"></a>

```csharp
public double EndOffsetMillis { get; }
```

- *Type:* double

---

##### `StartOffsetMillis`<sup>Required</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis"></a>

```csharp
public double StartOffsetMillis { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaList <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.get"></a>

```csharp
private DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis">DurationMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName">LiveSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis">ScheduledStartTimeMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia">DataAwsccMediatailorProgramAudienceMediaAlternateMedia</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList AdBreaks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a>

---

##### `ClipRange`<sup>Required</sup> <a name="ClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference ClipRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a>

---

##### `DurationMillis`<sup>Required</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis"></a>

```csharp
public double DurationMillis { get; }
```

- *Type:* double

---

##### `LiveSourceName`<sup>Required</sup> <a name="LiveSourceName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName"></a>

```csharp
public string LiveSourceName { get; }
```

- *Type:* string

---

##### `ScheduledStartTimeMillis`<sup>Required</sup> <a name="ScheduledStartTimeMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis"></a>

```csharp
public double ScheduledStartTimeMillis { get; }
```

- *Type:* double

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; }
```

- *Type:* string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName"></a>

```csharp
public string VodSourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMedia InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMedia">DataAwsccMediatailorProgramAudienceMediaAlternateMedia</a>

---


### DataAwsccMediatailorProgramAudienceMediaList <a name="DataAwsccMediatailorProgramAudienceMediaList" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.get"></a>

```csharp
private DataAwsccMediatailorProgramAudienceMediaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediatailorProgramAudienceMediaOutputReference <a name="DataAwsccMediatailorProgramAudienceMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramAudienceMediaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.alternateMedia">AlternateMedia</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia">DataAwsccMediatailorProgramAudienceMedia</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateMedia`<sup>Required</sup> <a name="AlternateMedia" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.alternateMedia"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMediaAlternateMediaList AlternateMedia { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaAlternateMediaList">DataAwsccMediatailorProgramAudienceMediaAlternateMediaList</a>

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMediaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramAudienceMedia InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramAudienceMedia">DataAwsccMediatailorProgramAudienceMedia</a>

---


### DataAwsccMediatailorProgramClipRangeOutputReference <a name="DataAwsccMediatailorProgramClipRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramClipRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange">DataAwsccMediatailorProgramClipRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndOffsetMillis`<sup>Required</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.endOffsetMillis"></a>

```csharp
public double EndOffsetMillis { get; }
```

- *Type:* double

---

##### `StartOffsetMillis`<sup>Required</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.startOffsetMillis"></a>

```csharp
public double StartOffsetMillis { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramClipRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramClipRange">DataAwsccMediatailorProgramClipRange</a>

---


### DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference <a name="DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange">DataAwsccMediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndOffsetMillis`<sup>Required</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis"></a>

```csharp
public double EndOffsetMillis { get; }
```

- *Type:* double

---

##### `StartOffsetMillis`<sup>Required</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis"></a>

```csharp
public double StartOffsetMillis { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramScheduleConfigurationClipRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRange">DataAwsccMediatailorProgramScheduleConfigurationClipRange</a>

---


### DataAwsccMediatailorProgramScheduleConfigurationOutputReference <a name="DataAwsccMediatailorProgramScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramScheduleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference">DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.transition">Transition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference">DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration">DataAwsccMediatailorProgramScheduleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClipRange`<sup>Required</sup> <a name="ClipRange" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.clipRange"></a>

```csharp
public DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference ClipRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference">DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference</a>

---

##### `Transition`<sup>Required</sup> <a name="Transition" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.transition"></a>

```csharp
public DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference Transition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference">DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramScheduleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfiguration">DataAwsccMediatailorProgramScheduleConfiguration</a>

---


### DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference <a name="DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis">DurationMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition">RelativePosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram">RelativeProgram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis">ScheduledStartTimeMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition">DataAwsccMediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationMillis`<sup>Required</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis"></a>

```csharp
public double DurationMillis { get; }
```

- *Type:* double

---

##### `RelativePosition`<sup>Required</sup> <a name="RelativePosition" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition"></a>

```csharp
public string RelativePosition { get; }
```

- *Type:* string

---

##### `RelativeProgram`<sup>Required</sup> <a name="RelativeProgram" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram"></a>

```csharp
public string RelativeProgram { get; }
```

- *Type:* string

---

##### `ScheduledStartTimeMillis`<sup>Required</sup> <a name="ScheduledStartTimeMillis" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis"></a>

```csharp
public double ScheduledStartTimeMillis { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediatailorProgramScheduleConfigurationTransition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorProgram.DataAwsccMediatailorProgramScheduleConfigurationTransition">DataAwsccMediatailorProgramScheduleConfigurationTransition</a>

---



