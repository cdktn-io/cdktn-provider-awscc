# `dataAwsccEc2CapacityReservationFleet` Submodule <a name="`dataAwsccEc2CapacityReservationFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2CapacityReservationFleet <a name="DataAwsccEc2CapacityReservationFleet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleet(Construct Scope, string Id, DataAwsccEc2CapacityReservationFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig">DataAwsccEc2CapacityReservationFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig">DataAwsccEc2CapacityReservationFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2CapacityReservationFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2CapacityReservationFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2CapacityReservationFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2CapacityReservationFleet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2CapacityReservationFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2CapacityReservationFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2CapacityReservationFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2CapacityReservationFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2CapacityReservationFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.capacityReservationFleetId">CapacityReservationFleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceTypeSpecifications">InstanceTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.noRemoveEndDate">NoRemoveEndDate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.removeEndDate">RemoveEndDate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `CapacityReservationFleetId`<sup>Required</sup> <a name="CapacityReservationFleetId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.capacityReservationFleetId"></a>

```csharp
public string CapacityReservationFleetId { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `InstanceMatchCriteria`<sup>Required</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; }
```

- *Type:* string

---

##### `InstanceTypeSpecifications`<sup>Required</sup> <a name="InstanceTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceTypeSpecifications"></a>

```csharp
public DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList InstanceTypeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList</a>

---

##### `NoRemoveEndDate`<sup>Required</sup> <a name="NoRemoveEndDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.noRemoveEndDate"></a>

```csharp
public IResolvable NoRemoveEndDate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RemoveEndDate`<sup>Required</sup> <a name="RemoveEndDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.removeEndDate"></a>

```csharp
public IResolvable RemoveEndDate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tagSpecifications"></a>

```csharp
public DataAwsccEc2CapacityReservationFleetTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsList</a>

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.totalTargetCapacity"></a>

```csharp
public double TotalTargetCapacity { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2CapacityReservationFleetConfig <a name="DataAwsccEc2CapacityReservationFleetConfig" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_capacity_reservation_fleet#id DataAwsccEc2CapacityReservationFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications <a name="DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications {

};
```


### DataAwsccEc2CapacityReservationFleetTagSpecifications <a name="DataAwsccEc2CapacityReservationFleetTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetTagSpecifications {

};
```


### DataAwsccEc2CapacityReservationFleetTagSpecificationsTags <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetTagSpecificationsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList <a name="DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.get"></a>

```csharp
private DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference <a name="DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized">EbsOptimized</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized"></a>

```csharp
public IResolvable EbsOptimized { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications</a>

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsList <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.get"></a>

```csharp
private DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications">DataAwsccEc2CapacityReservationFleetTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.tags"></a>

```csharp
public DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2CapacityReservationFleetTagSpecifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications">DataAwsccEc2CapacityReservationFleetTagSpecifications</a>

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.get"></a>

```csharp
private DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags">DataAwsccEc2CapacityReservationFleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2CapacityReservationFleetTagSpecificationsTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags">DataAwsccEc2CapacityReservationFleetTagSpecificationsTags</a>

---



