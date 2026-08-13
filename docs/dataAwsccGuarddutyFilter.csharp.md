# `dataAwsccGuarddutyFilter` Submodule <a name="`dataAwsccGuarddutyFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyFilter <a name="DataAwsccGuarddutyFilter" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_filter awscc_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilter(Construct Scope, string Id, DataAwsccGuarddutyFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig">DataAwsccGuarddutyFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig">DataAwsccGuarddutyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyFilter.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGuarddutyFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGuarddutyFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGuarddutyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.detectorId">DetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference">DataAwsccGuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.rank">Rank</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList">DataAwsccGuarddutyFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.detectorId"></a>

```csharp
public string DetectorId { get; }
```

- *Type:* string

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.findingCriteria"></a>

```csharp
public DataAwsccGuarddutyFilterFindingCriteriaOutputReference FindingCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference">DataAwsccGuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.rank"></a>

```csharp
public double Rank { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tags"></a>

```csharp
public DataAwsccGuarddutyFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList">DataAwsccGuarddutyFilterTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyFilterConfig <a name="DataAwsccGuarddutyFilterConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_filter#id DataAwsccGuarddutyFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyFilterFindingCriteria <a name="DataAwsccGuarddutyFilterFindingCriteria" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterFindingCriteria {

};
```


### DataAwsccGuarddutyFilterFindingCriteriaCriterion <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterFindingCriteriaCriterion {

};
```


### DataAwsccGuarddutyFilterTags <a name="DataAwsccGuarddutyFilterTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyFilterFindingCriteriaCriterionMap <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterFindingCriteriaCriterionMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get"></a>

```csharp
private DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq">Eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">EqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">GreaterThan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">GreaterThanOrEqual</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt">Gt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte">Gte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">LessThan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">LessThanOrEqual</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt">Lt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte">Lte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq">Neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">NotEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion">DataAwsccGuarddutyFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```csharp
public string[] Eq { get; }
```

- *Type:* string[]

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```csharp
public string[] EqualTo { get; }
```

- *Type:* string[]

---

##### `GreaterThan`<sup>Required</sup> <a name="GreaterThan" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```csharp
public double GreaterThan { get; }
```

- *Type:* double

---

##### `GreaterThanOrEqual`<sup>Required</sup> <a name="GreaterThanOrEqual" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```csharp
public double GreaterThanOrEqual { get; }
```

- *Type:* double

---

##### `Gt`<sup>Required</sup> <a name="Gt" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```csharp
public double Gt { get; }
```

- *Type:* double

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```csharp
public double Gte { get; }
```

- *Type:* double

---

##### `LessThan`<sup>Required</sup> <a name="LessThan" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```csharp
public double LessThan { get; }
```

- *Type:* double

---

##### `LessThanOrEqual`<sup>Required</sup> <a name="LessThanOrEqual" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```csharp
public double LessThanOrEqual { get; }
```

- *Type:* double

---

##### `Lt`<sup>Required</sup> <a name="Lt" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```csharp
public double Lt { get; }
```

- *Type:* double

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```csharp
public double Lte { get; }
```

- *Type:* double

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```csharp
public string[] Neq { get; }
```

- *Type:* string[]

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```csharp
public string[] NotEquals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGuarddutyFilterFindingCriteriaCriterion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion">DataAwsccGuarddutyFilterFindingCriteriaCriterion</a>

---


### DataAwsccGuarddutyFilterFindingCriteriaOutputReference <a name="DataAwsccGuarddutyFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterFindingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.criterion">Criterion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap">DataAwsccGuarddutyFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria">DataAwsccGuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```csharp
public DataAwsccGuarddutyFilterFindingCriteriaCriterionMap Criterion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap">DataAwsccGuarddutyFilterFindingCriteriaCriterionMap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGuarddutyFilterFindingCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria">DataAwsccGuarddutyFilterFindingCriteria</a>

---


### DataAwsccGuarddutyFilterTagsList <a name="DataAwsccGuarddutyFilterTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get"></a>

```csharp
private DataAwsccGuarddutyFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGuarddutyFilterTagsOutputReference <a name="DataAwsccGuarddutyFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags">DataAwsccGuarddutyFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGuarddutyFilterTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags">DataAwsccGuarddutyFilterTags</a>

---



