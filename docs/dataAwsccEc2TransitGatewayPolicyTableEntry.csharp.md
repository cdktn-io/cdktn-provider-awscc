# `dataAwsccEc2TransitGatewayPolicyTableEntry` Submodule <a name="`dataAwsccEc2TransitGatewayPolicyTableEntry` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayPolicyTableEntry <a name="DataAwsccEc2TransitGatewayPolicyTableEntry" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table_entry awscc_ec2_transit_gateway_policy_table_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayPolicyTableEntry(Construct Scope, string Id, DataAwsccEc2TransitGatewayPolicyTableEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig">DataAwsccEc2TransitGatewayPolicyTableEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig">DataAwsccEc2TransitGatewayPolicyTableEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayPolicyTableEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayPolicyTableEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayPolicyTableEntry.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayPolicyTableEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayPolicyTableEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayPolicyTableEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayPolicyTableEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRule">PolicyRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRuleNumber">PolicyRuleNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.targetRouteTableId">TargetRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableId">TransitGatewayPolicyTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PolicyRule`<sup>Required</sup> <a name="PolicyRule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRule"></a>

```csharp
public DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference PolicyRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference</a>

---

##### `PolicyRuleNumber`<sup>Required</sup> <a name="PolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRuleNumber"></a>

```csharp
public string PolicyRuleNumber { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetRouteTableId`<sup>Required</sup> <a name="TargetRouteTableId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.targetRouteTableId"></a>

```csharp
public string TargetRouteTableId { get; }
```

- *Type:* string

---

##### `TransitGatewayPolicyTableId`<sup>Required</sup> <a name="TransitGatewayPolicyTableId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableId"></a>

```csharp
public string TransitGatewayPolicyTableId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayPolicyTableEntryConfig <a name="DataAwsccEc2TransitGatewayPolicyTableEntryConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayPolicyTableEntryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table_entry#id DataAwsccEc2TransitGatewayPolicyTableEntry#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule <a name="DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference <a name="DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRange"></a>

```csharp
public string DestinationPortRange { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlock"></a>

```csharp
public string SourceCidrBlock { get; }
```

- *Type:* string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRange"></a>

```csharp
public string SourcePortRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule</a>

---



