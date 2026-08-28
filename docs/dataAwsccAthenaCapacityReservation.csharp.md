# `dataAwsccAthenaCapacityReservation` Submodule <a name="`dataAwsccAthenaCapacityReservation` Submodule" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAthenaCapacityReservation <a name="DataAwsccAthenaCapacityReservation" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/athena_capacity_reservation awscc_athena_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservation(Construct Scope, string Id, DataAwsccAthenaCapacityReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig">DataAwsccAthenaCapacityReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig">DataAwsccAthenaCapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAthenaCapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAthenaCapacityReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAthenaCapacityReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAthenaCapacityReservation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAthenaCapacityReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAthenaCapacityReservation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAthenaCapacityReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAthenaCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAthenaCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.allocatedDpus">AllocatedDpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.capacityAssignmentConfiguration">CapacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.lastSuccessfulAllocationTime">LastSuccessfulAllocationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList">DataAwsccAthenaCapacityReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.targetDpus">TargetDpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocatedDpus`<sup>Required</sup> <a name="AllocatedDpus" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.allocatedDpus"></a>

```csharp
public double AllocatedDpus { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityAssignmentConfiguration`<sup>Required</sup> <a name="CapacityAssignmentConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.capacityAssignmentConfiguration"></a>

```csharp
public DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference CapacityAssignmentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `LastSuccessfulAllocationTime`<sup>Required</sup> <a name="LastSuccessfulAllocationTime" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.lastSuccessfulAllocationTime"></a>

```csharp
public string LastSuccessfulAllocationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.tags"></a>

```csharp
public DataAwsccAthenaCapacityReservationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList">DataAwsccAthenaCapacityReservationTagsList</a>

---

##### `TargetDpus`<sup>Required</sup> <a name="TargetDpus" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.targetDpus"></a>

```csharp
public double TargetDpus { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration <a name="DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration {

};
```


### DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments <a name="DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments {

};
```


### DataAwsccAthenaCapacityReservationConfig <a name="DataAwsccAthenaCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/athena_capacity_reservation#id DataAwsccAthenaCapacityReservation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAthenaCapacityReservationTags <a name="DataAwsccAthenaCapacityReservationTags" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList <a name="DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get"></a>

```csharp
private DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference <a name="DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames">WorkgroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkgroupNames`<sup>Required</sup> <a name="WorkgroupNames" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames"></a>

```csharp
public string[] WorkgroupNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>

---


### DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference <a name="DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments">CapacityAssignments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration">DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityAssignments`<sup>Required</sup> <a name="CapacityAssignments" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments"></a>

```csharp
public DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList CapacityAssignments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration">DataAwsccAthenaCapacityReservationCapacityAssignmentConfiguration</a>

---


### DataAwsccAthenaCapacityReservationTagsList <a name="DataAwsccAthenaCapacityReservationTagsList" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.get"></a>

```csharp
private DataAwsccAthenaCapacityReservationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAthenaCapacityReservationTagsOutputReference <a name="DataAwsccAthenaCapacityReservationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAthenaCapacityReservationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTags">DataAwsccAthenaCapacityReservationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAthenaCapacityReservationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAthenaCapacityReservation.DataAwsccAthenaCapacityReservationTags">DataAwsccAthenaCapacityReservationTags</a>

---



