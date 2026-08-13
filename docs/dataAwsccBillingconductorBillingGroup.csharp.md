# `dataAwsccBillingconductorBillingGroup` Submodule <a name="`dataAwsccBillingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBillingconductorBillingGroup <a name="DataAwsccBillingconductorBillingGroup" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroup(Construct Scope, string Id, DataAwsccBillingconductorBillingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig">DataAwsccBillingconductorBillingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig">DataAwsccBillingconductorBillingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorBillingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorBillingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorBillingGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorBillingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBillingconductorBillingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.accountGrouping">AccountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference">DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.computationPreference">ComputationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference">DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.primaryAccountId">PrimaryAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList">DataAwsccBillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountGrouping`<sup>Required</sup> <a name="AccountGrouping" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.accountGrouping"></a>

```csharp
public DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference AccountGrouping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference">DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputationPreference`<sup>Required</sup> <a name="ComputationPreference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.computationPreference"></a>

```csharp
public DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference ComputationPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference">DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryAccountId`<sup>Required</sup> <a name="PrimaryAccountId" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.primaryAccountId"></a>

```csharp
public string PrimaryAccountId { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tags"></a>

```csharp
public DataAwsccBillingconductorBillingGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList">DataAwsccBillingconductorBillingGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBillingconductorBillingGroupAccountGrouping <a name="DataAwsccBillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupAccountGrouping {

};
```


### DataAwsccBillingconductorBillingGroupComputationPreference <a name="DataAwsccBillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupComputationPreference {

};
```


### DataAwsccBillingconductorBillingGroupConfig <a name="DataAwsccBillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group#id DataAwsccBillingconductorBillingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBillingconductorBillingGroupTags <a name="DataAwsccBillingconductorBillingGroupTags" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference <a name="DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">AutoAssociate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">LinkedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">ResponsibilityTransferArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping">DataAwsccBillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoAssociate`<sup>Required</sup> <a name="AutoAssociate" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```csharp
public IResolvable AutoAssociate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LinkedAccountIds`<sup>Required</sup> <a name="LinkedAccountIds" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```csharp
public string[] LinkedAccountIds { get; }
```

- *Type:* string[]

---

##### `ResponsibilityTransferArn`<sup>Required</sup> <a name="ResponsibilityTransferArn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```csharp
public string ResponsibilityTransferArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorBillingGroupAccountGrouping InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping">DataAwsccBillingconductorBillingGroupAccountGrouping</a>

---


### DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference <a name="DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">PricingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference">DataAwsccBillingconductorBillingGroupComputationPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PricingPlanArn`<sup>Required</sup> <a name="PricingPlanArn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```csharp
public string PricingPlanArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorBillingGroupComputationPreference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference">DataAwsccBillingconductorBillingGroupComputationPreference</a>

---


### DataAwsccBillingconductorBillingGroupTagsList <a name="DataAwsccBillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.get"></a>

```csharp
private DataAwsccBillingconductorBillingGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBillingconductorBillingGroupTagsOutputReference <a name="DataAwsccBillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorBillingGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags">DataAwsccBillingconductorBillingGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorBillingGroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags">DataAwsccBillingconductorBillingGroupTags</a>

---



