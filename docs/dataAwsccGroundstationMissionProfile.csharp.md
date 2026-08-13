# `dataAwsccGroundstationMissionProfile` Submodule <a name="`dataAwsccGroundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGroundstationMissionProfile <a name="DataAwsccGroundstationMissionProfile" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfile(Construct Scope, string Id, DataAwsccGroundstationMissionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig">DataAwsccGroundstationMissionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig">DataAwsccGroundstationMissionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationMissionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationMissionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationMissionProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationMissionProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGroundstationMissionProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dataflowEdges">DataflowEdges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList">DataAwsccGroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.minimumViableContactDurationSeconds">MinimumViableContactDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.missionProfileId">MissionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsKey">StreamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference">DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsRole">StreamsKmsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList">DataAwsccGroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.telemetrySinkConfigArn">TelemetrySinkConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.trackingConfigArn">TrackingConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; }
```

- *Type:* double

---

##### `DataflowEdges`<sup>Required</sup> <a name="DataflowEdges" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dataflowEdges"></a>

```csharp
public DataAwsccGroundstationMissionProfileDataflowEdgesList DataflowEdges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList">DataAwsccGroundstationMissionProfileDataflowEdgesList</a>

---

##### `MinimumViableContactDurationSeconds`<sup>Required</sup> <a name="MinimumViableContactDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```csharp
public double MinimumViableContactDurationSeconds { get; }
```

- *Type:* double

---

##### `MissionProfileId`<sup>Required</sup> <a name="MissionProfileId" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.missionProfileId"></a>

```csharp
public string MissionProfileId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StreamsKmsKey`<sup>Required</sup> <a name="StreamsKmsKey" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsKey"></a>

```csharp
public DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference StreamsKmsKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference">DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `StreamsKmsRole`<sup>Required</sup> <a name="StreamsKmsRole" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsRole"></a>

```csharp
public string StreamsKmsRole { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tags"></a>

```csharp
public DataAwsccGroundstationMissionProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList">DataAwsccGroundstationMissionProfileTagsList</a>

---

##### `TelemetrySinkConfigArn`<sup>Required</sup> <a name="TelemetrySinkConfigArn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```csharp
public string TelemetrySinkConfigArn { get; }
```

- *Type:* string

---

##### `TrackingConfigArn`<sup>Required</sup> <a name="TrackingConfigArn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.trackingConfigArn"></a>

```csharp
public string TrackingConfigArn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGroundstationMissionProfileConfig <a name="DataAwsccGroundstationMissionProfileConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_mission_profile#id DataAwsccGroundstationMissionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGroundstationMissionProfileDataflowEdges <a name="DataAwsccGroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileDataflowEdges {

};
```


### DataAwsccGroundstationMissionProfileStreamsKmsKey <a name="DataAwsccGroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileStreamsKmsKey {

};
```


### DataAwsccGroundstationMissionProfileTags <a name="DataAwsccGroundstationMissionProfileTags" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGroundstationMissionProfileDataflowEdgesList <a name="DataAwsccGroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileDataflowEdgesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.get"></a>

```csharp
private DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference <a name="DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges">DataAwsccGroundstationMissionProfileDataflowEdges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationMissionProfileDataflowEdges InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges">DataAwsccGroundstationMissionProfileDataflowEdges</a>

---


### DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference <a name="DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">KmsAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">KmsAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey">DataAwsccGroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsAliasArn`<sup>Required</sup> <a name="KmsAliasArn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```csharp
public string KmsAliasArn { get; }
```

- *Type:* string

---

##### `KmsAliasName`<sup>Required</sup> <a name="KmsAliasName" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```csharp
public string KmsAliasName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationMissionProfileStreamsKmsKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey">DataAwsccGroundstationMissionProfileStreamsKmsKey</a>

---


### DataAwsccGroundstationMissionProfileTagsList <a name="DataAwsccGroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.get"></a>

```csharp
private DataAwsccGroundstationMissionProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGroundstationMissionProfileTagsOutputReference <a name="DataAwsccGroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationMissionProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags">DataAwsccGroundstationMissionProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationMissionProfileTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags">DataAwsccGroundstationMissionProfileTags</a>

---



