# `dataAwsccMediaconnectRouterOutput` Submodule <a name="`dataAwsccMediaconnectRouterOutput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectRouterOutput <a name="DataAwsccMediaconnectRouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_output awscc_mediaconnect_router_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutput(Construct Scope, string Id, DataAwsccMediaconnectRouterOutputConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig">DataAwsccMediaconnectRouterOutputConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig">DataAwsccMediaconnectRouterOutputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectRouterOutput resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectRouterOutput.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectRouterOutput.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectRouterOutput.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectRouterOutput.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediaconnectRouterOutput resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectRouterOutput to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectRouterOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectRouterOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceType">MaintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routedState">RoutedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routerOutputId">RouterOutputId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routingScope">RoutingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList">DataAwsccMediaconnectRouterOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.configuration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceConfiguration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference MaintenanceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference</a>

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceType"></a>

```csharp
public string MaintenanceType { get; }
```

- *Type:* string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `RoutedState`<sup>Required</sup> <a name="RoutedState" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routedState"></a>

```csharp
public string RoutedState { get; }
```

- *Type:* string

---

##### `RouterOutputId`<sup>Required</sup> <a name="RouterOutputId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routerOutputId"></a>

```csharp
public string RouterOutputId { get; }
```

- *Type:* string

---

##### `RoutingScope`<sup>Required</sup> <a name="RoutingScope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routingScope"></a>

```csharp
public string RoutingScope { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tags"></a>

```csharp
public DataAwsccMediaconnectRouterOutputTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList">DataAwsccMediaconnectRouterOutputTagsList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectRouterOutputConfig <a name="DataAwsccMediaconnectRouterOutputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_output#id DataAwsccMediaconnectRouterOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectRouterOutputConfiguration <a name="DataAwsccMediaconnectRouterOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandard <a name="DataAwsccMediaconnectRouterOutputConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandard {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey {

};
```


### DataAwsccMediaconnectRouterOutputMaintenanceConfiguration <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputMaintenanceConfiguration {

};
```


### DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime {

};
```


### DataAwsccMediaconnectRouterOutputTags <a name="DataAwsccMediaconnectRouterOutputTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```csharp
public string Automatic { get; }
```

- *Type:* string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference SecretsManager { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference EncryptionKeyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```csharp
public string EncryptionKeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption">DestinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn">FlowSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationTransitEncryption`<sup>Required</sup> <a name="DestinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference DestinationTransitEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a>

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `FlowSourceArn`<sup>Required</sup> <a name="FlowSourceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn"></a>

```csharp
public string FlowSourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```csharp
public string Automatic { get; }
```

- *Type:* string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference SecretsManager { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference EncryptionKeyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```csharp
public string EncryptionKeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption">DestinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn">MediaLiveInputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId">MediaLivePipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationTransitEncryption`<sup>Required</sup> <a name="DestinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference DestinationTransitEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a>

---

##### `MediaLiveInputArn`<sup>Required</sup> <a name="MediaLiveInputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn"></a>

```csharp
public string MediaLiveInputArn { get; }
```

- *Type:* string

---

##### `MediaLivePipelineId`<sup>Required</sup> <a name="MediaLivePipelineId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId"></a>

```csharp
public string MediaLivePipelineId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow">MediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput">MediaLiveInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration">DataAwsccMediaconnectRouterOutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaConnectFlow`<sup>Required</sup> <a name="MediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference MediaConnectFlow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a>

---

##### `MediaLiveInput`<sup>Required</sup> <a name="MediaLiveInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference MediaLiveInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.standard"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference Standard { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration">DataAwsccMediaconnectRouterOutputConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn">NetworkInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard">DataAwsccMediaconnectRouterOutputConfigurationStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterfaceArn`<sup>Required</sup> <a name="NetworkInterfaceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn"></a>

```csharp
public string NetworkInterfaceArn { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference ProtocolConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandard InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard">DataAwsccMediaconnectRouterOutputConfigurationStandard</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference Rist { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference Rtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference SrtCaller { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference SrtListener { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection">ForwardErrorCorrection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `ForwardErrorCorrection`<sup>Required</sup> <a name="ForwardErrorCorrection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection"></a>

```csharp
public string ForwardErrorCorrection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime">PreferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration">DataAwsccMediaconnectRouterOutputMaintenanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `PreferredDayTime`<sup>Required</sup> <a name="PreferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime"></a>

```csharp
public DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference PreferredDayTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputMaintenanceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration">DataAwsccMediaconnectRouterOutputMaintenanceConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

---


### DataAwsccMediaconnectRouterOutputTagsList <a name="DataAwsccMediaconnectRouterOutputTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.get"></a>

```csharp
private DataAwsccMediaconnectRouterOutputTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectRouterOutputTagsOutputReference <a name="DataAwsccMediaconnectRouterOutputTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectRouterOutputTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags">DataAwsccMediaconnectRouterOutputTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectRouterOutputTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags">DataAwsccMediaconnectRouterOutputTags</a>

---



