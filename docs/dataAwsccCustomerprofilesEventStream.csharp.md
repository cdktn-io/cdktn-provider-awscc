# `dataAwsccCustomerprofilesEventStream` Submodule <a name="`dataAwsccCustomerprofilesEventStream` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesEventStream <a name="DataAwsccCustomerprofilesEventStream" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/customerprofiles_event_stream awscc_customerprofiles_event_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStream(Construct Scope, string Id, DataAwsccCustomerprofilesEventStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig">DataAwsccCustomerprofilesEventStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig">DataAwsccCustomerprofilesEventStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesEventStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventStream.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesEventStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesEventStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesEventStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/customerprofiles_event_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesEventStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference">DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamArn">EventStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamName">EventStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList">DataAwsccCustomerprofilesEventStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DestinationDetails`<sup>Required</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.destinationDetails"></a>

```csharp
public DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference DestinationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference">DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EventStreamArn`<sup>Required</sup> <a name="EventStreamArn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamArn"></a>

```csharp
public string EventStreamArn { get; }
```

- *Type:* string

---

##### `EventStreamName`<sup>Required</sup> <a name="EventStreamName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamName"></a>

```csharp
public string EventStreamName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tags"></a>

```csharp
public DataAwsccCustomerprofilesEventStreamTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList">DataAwsccCustomerprofilesEventStreamTagsList</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesEventStreamConfig <a name="DataAwsccCustomerprofilesEventStreamConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStreamConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/customerprofiles_event_stream#id DataAwsccCustomerprofilesEventStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesEventStreamDestinationDetails <a name="DataAwsccCustomerprofilesEventStreamDestinationDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStreamDestinationDetails {

};
```


### DataAwsccCustomerprofilesEventStreamTags <a name="DataAwsccCustomerprofilesEventStreamTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStreamTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference <a name="DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails">DataAwsccCustomerprofilesEventStreamDestinationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventStreamDestinationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails">DataAwsccCustomerprofilesEventStreamDestinationDetails</a>

---


### DataAwsccCustomerprofilesEventStreamTagsList <a name="DataAwsccCustomerprofilesEventStreamTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStreamTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.get"></a>

```csharp
private DataAwsccCustomerprofilesEventStreamTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventStreamTagsOutputReference <a name="DataAwsccCustomerprofilesEventStreamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventStreamTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags">DataAwsccCustomerprofilesEventStreamTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventStreamTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags">DataAwsccCustomerprofilesEventStreamTags</a>

---



