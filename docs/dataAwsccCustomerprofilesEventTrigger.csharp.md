# `dataAwsccCustomerprofilesEventTrigger` Submodule <a name="`dataAwsccCustomerprofilesEventTrigger` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesEventTrigger <a name="DataAwsccCustomerprofilesEventTrigger" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTrigger(Construct Scope, string Id, DataAwsccCustomerprofilesEventTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig">DataAwsccCustomerprofilesEventTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig">DataAwsccCustomerprofilesEventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventTrigger.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesEventTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesEventTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.eventTriggerConditions">EventTriggerConditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.eventTriggerLimits">EventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference">DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.eventTriggerName">EventTriggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.segmentFilter">SegmentFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList">DataAwsccCustomerprofilesEventTriggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EventTriggerConditions`<sup>Required</sup> <a name="EventTriggerConditions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.eventTriggerConditions"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList EventTriggerConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList</a>

---

##### `EventTriggerLimits`<sup>Required</sup> <a name="EventTriggerLimits" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.eventTriggerLimits"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference EventTriggerLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference">DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a>

---

##### `EventTriggerName`<sup>Required</sup> <a name="EventTriggerName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.eventTriggerName"></a>

```csharp
public string EventTriggerName { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; }
```

- *Type:* string

---

##### `SegmentFilter`<sup>Required</sup> <a name="SegmentFilter" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.segmentFilter"></a>

```csharp
public string SegmentFilter { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.tags"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList">DataAwsccCustomerprofilesEventTriggerTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesEventTriggerConfig <a name="DataAwsccCustomerprofilesEventTriggerConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_event_trigger#id DataAwsccCustomerprofilesEventTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesEventTriggerEventTriggerConditions <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditions {

};
```


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions {

};
```


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes {

};
```


### DataAwsccCustomerprofilesEventTriggerEventTriggerLimits <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerLimits" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerLimits {

};
```


### DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods {

};
```


### DataAwsccCustomerprofilesEventTriggerTags <a name="DataAwsccCustomerprofilesEventTriggerTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get"></a>

```csharp
private DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get"></a>

```csharp
private DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes">ObjectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectAttributes`<sup>Required</sup> <a name="ObjectAttributes" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList ObjectAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.get"></a>

```csharp
private DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions">EventTriggerDimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditions">DataAwsccCustomerprofilesEventTriggerEventTriggerConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTriggerDimensions`<sup>Required</sup> <a name="EventTriggerDimensions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList EventTriggerDimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a>

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerConditions">DataAwsccCustomerprofilesEventTriggerEventTriggerConditions</a>

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration">EventExpiration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods">Periods</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimits">DataAwsccCustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventExpiration`<sup>Required</sup> <a name="EventExpiration" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration"></a>

```csharp
public double EventExpiration { get; }
```

- *Type:* double

---

##### `Periods`<sup>Required</sup> <a name="Periods" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList Periods { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimits">DataAwsccCustomerprofilesEventTriggerEventTriggerLimits</a>

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get"></a>

```csharp
private DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference <a name="DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile">MaxInvocationsPerProfile</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited">Unlimited</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods">DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInvocationsPerProfile`<sup>Required</sup> <a name="MaxInvocationsPerProfile" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile"></a>

```csharp
public double MaxInvocationsPerProfile { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited"></a>

```csharp
public IResolvable Unlimited { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods">DataAwsccCustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>

---


### DataAwsccCustomerprofilesEventTriggerTagsList <a name="DataAwsccCustomerprofilesEventTriggerTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.get"></a>

```csharp
private DataAwsccCustomerprofilesEventTriggerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventTriggerTagsOutputReference <a name="DataAwsccCustomerprofilesEventTriggerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesEventTriggerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTags">DataAwsccCustomerprofilesEventTriggerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesEventTriggerTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventTrigger.DataAwsccCustomerprofilesEventTriggerTags">DataAwsccCustomerprofilesEventTriggerTags</a>

---



