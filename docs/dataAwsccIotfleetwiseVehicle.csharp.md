# `dataAwsccIotfleetwiseVehicle` Submodule <a name="`dataAwsccIotfleetwiseVehicle` Submodule" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotfleetwiseVehicle <a name="DataAwsccIotfleetwiseVehicle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicle(Construct Scope, string Id, DataAwsccIotfleetwiseVehicleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig">DataAwsccIotfleetwiseVehicleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig">DataAwsccIotfleetwiseVehicleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotfleetwiseVehicle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotfleetwiseVehicle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotfleetwiseVehicle.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotfleetwiseVehicle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotfleetwiseVehicle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotfleetwiseVehicle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotfleetwiseVehicle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.associationBehavior">AssociationBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.decoderManifestArn">DecoderManifestArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lastModificationTime">LastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.modelManifestArn">ModelManifestArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.stateTemplates">StateTemplates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList">DataAwsccIotfleetwiseVehicleStateTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList">DataAwsccIotfleetwiseVehicleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationBehavior`<sup>Required</sup> <a name="AssociationBehavior" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.associationBehavior"></a>

```csharp
public string AssociationBehavior { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DecoderManifestArn`<sup>Required</sup> <a name="DecoderManifestArn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.decoderManifestArn"></a>

```csharp
public string DecoderManifestArn { get; }
```

- *Type:* string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lastModificationTime"></a>

```csharp
public string LastModificationTime { get; }
```

- *Type:* string

---

##### `ModelManifestArn`<sup>Required</sup> <a name="ModelManifestArn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.modelManifestArn"></a>

```csharp
public string ModelManifestArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StateTemplates`<sup>Required</sup> <a name="StateTemplates" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.stateTemplates"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesList StateTemplates { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList">DataAwsccIotfleetwiseVehicleStateTemplatesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tags"></a>

```csharp
public DataAwsccIotfleetwiseVehicleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList">DataAwsccIotfleetwiseVehicleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotfleetwiseVehicleConfig <a name="DataAwsccIotfleetwiseVehicleConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#id DataAwsccIotfleetwiseVehicle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotfleetwiseVehicleStateTemplates <a name="DataAwsccIotfleetwiseVehicleStateTemplates" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplates {

};
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy {

};
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic {

};
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate {

};
```


### DataAwsccIotfleetwiseVehicleTags <a name="DataAwsccIotfleetwiseVehicleTags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotfleetwiseVehicleStateTemplatesList <a name="DataAwsccIotfleetwiseVehicleStateTemplatesList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get"></a>

```csharp
private DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy">StateTemplateUpdateStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates">DataAwsccIotfleetwiseVehicleStateTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `StateTemplateUpdateStrategy`<sup>Required</sup> <a name="StateTemplateUpdateStrategy" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference StateTemplateUpdateStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates">DataAwsccIotfleetwiseVehicleStateTemplates</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange">OnChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic">Periodic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnChange`<sup>Required</sup> <a name="OnChange" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange"></a>

```csharp
public string OnChange { get; }
```

- *Type:* string

---

##### `Periodic`<sup>Required</sup> <a name="Periodic" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference Periodic { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate">StateTemplateUpdateRate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateTemplateUpdateRate`<sup>Required</sup> <a name="StateTemplateUpdateRate" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference StateTemplateUpdateRate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

---


### DataAwsccIotfleetwiseVehicleTagsList <a name="DataAwsccIotfleetwiseVehicleTagsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get"></a>

```csharp
private DataAwsccIotfleetwiseVehicleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotfleetwiseVehicleTagsOutputReference <a name="DataAwsccIotfleetwiseVehicleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotfleetwiseVehicleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags">DataAwsccIotfleetwiseVehicleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotfleetwiseVehicleTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags">DataAwsccIotfleetwiseVehicleTags</a>

---



