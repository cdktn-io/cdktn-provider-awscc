# `dataAwsccQuicksightCustomPermissions` Submodule <a name="`dataAwsccQuicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightCustomPermissions <a name="DataAwsccQuicksightCustomPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissions(Construct Scope, string Id, DataAwsccQuicksightCustomPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightCustomPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName">CustomPermissionsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference Capabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName"></a>

```csharp
public string CustomPermissionsName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightCustomPermissionsCapabilities <a name="DataAwsccQuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsCapabilities {

};
```


### DataAwsccQuicksightCustomPermissionsConfig <a name="DataAwsccQuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightCustomPermissionsTags <a name="DataAwsccQuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference <a name="DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">Analysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">Apps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">AsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">Automate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">BambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">BoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">ChatAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">ComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">ConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">CreateChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">CreateSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">CreateSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">Dashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">ExportToCsv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">ExportToExcel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">ExportToPdf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">Extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">FactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">Flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">GenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">GithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">HubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">IntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">JiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">LinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">McpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">MondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">MsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">MsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">NewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">NotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">OneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">OpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">PagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">PrintReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research">Research</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">SalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">SandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">ServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">ShareAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">ShareApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">ShareChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">ShareDashboards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">ShareDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">ShareDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">ShareGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">ShareJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">ShareLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">ShareMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">ShareMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">ShareNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">SharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">ShareSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">ShareSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">ShareTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">SlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">SmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">TextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">UseAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">UseBedrockModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">UseComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">UseFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">UseGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">UseHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">UseIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">UseJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">UseLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">UseMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">UseMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">UseNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">UseSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">UseSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">UseTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">UseZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">ZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessAppsNativeDataStore`<sup>Required</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```csharp
public string AccessAppsNativeDataStore { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```csharp
public string AddOrRunAnomalyDetectionForAnalyses { get; }
```

- *Type:* string

---

##### `AmazonBedrockArsAction`<sup>Required</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```csharp
public string AmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `AmazonBedrockFsAction`<sup>Required</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```csharp
public string AmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `AmazonBedrockKrsAction`<sup>Required</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```csharp
public string AmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `AmazonSThreeAction`<sup>Required</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```csharp
public string AmazonSThreeAction { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```csharp
public string Analysis { get; }
```

- *Type:* string

---

##### `ApproveFlowShareRequests`<sup>Required</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```csharp
public string ApproveFlowShareRequests { get; }
```

- *Type:* string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```csharp
public string Apps { get; }
```

- *Type:* string

---

##### `AsanaAction`<sup>Required</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```csharp
public string AsanaAction { get; }
```

- *Type:* string

---

##### `Automate`<sup>Required</sup> <a name="Automate" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```csharp
public string Automate { get; }
```

- *Type:* string

---

##### `BambooHrAction`<sup>Required</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```csharp
public string BambooHrAction { get; }
```

- *Type:* string

---

##### `BoxAgentAction`<sup>Required</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```csharp
public string BoxAgentAction { get; }
```

- *Type:* string

---

##### `BuildCalculatedFieldWithQ`<sup>Required</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```csharp
public string BuildCalculatedFieldWithQ { get; }
```

- *Type:* string

---

##### `CanvaAgentAction`<sup>Required</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```csharp
public string CanvaAgentAction { get; }
```

- *Type:* string

---

##### `ChatAgent`<sup>Required</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```csharp
public string ChatAgent { get; }
```

- *Type:* string

---

##### `ComprehendAction`<sup>Required</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```csharp
public string ComprehendAction { get; }
```

- *Type:* string

---

##### `ComprehendMedicalAction`<sup>Required</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```csharp
public string ComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `ConfluenceAction`<sup>Required</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```csharp
public string ConfluenceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```csharp
public string CreateAndUpdateAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateApps`<sup>Required</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```csharp
public string CreateAndUpdateApps { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAsanaAction`<sup>Required</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```csharp
public string CreateAndUpdateAsanaAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBambooHrAction`<sup>Required</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```csharp
public string CreateAndUpdateBambooHrAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBoxAgentAction`<sup>Required</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```csharp
public string CreateAndUpdateBoxAgentAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```csharp
public string CreateAndUpdateCanvaAgentAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```csharp
public string CreateAndUpdateComprehendAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```csharp
public string CreateAndUpdateComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateConfluenceAction`<sup>Required</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```csharp
public string CreateAndUpdateConfluenceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```csharp
public string CreateAndUpdateDashboardEmailReports { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDatasets`<sup>Required</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```csharp
public string CreateAndUpdateDatasets { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDataSources`<sup>Required</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```csharp
public string CreateAndUpdateDataSources { get; }
```

- *Type:* string

---

##### `CreateAndUpdateFactSetAction`<sup>Required</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```csharp
public string CreateAndUpdateFactSetAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGenericHttpAction`<sup>Required</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```csharp
public string CreateAndUpdateGenericHttpAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGithubAction`<sup>Required</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```csharp
public string CreateAndUpdateGithubAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```csharp
public string CreateAndUpdateGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHubspotAction`<sup>Required</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```csharp
public string CreateAndUpdateHubspotAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```csharp
public string CreateAndUpdateHuggingFaceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateIntercomAction`<sup>Required</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```csharp
public string CreateAndUpdateIntercomAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateJiraAction`<sup>Required</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```csharp
public string CreateAndUpdateJiraAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateKnowledgeBases`<sup>Required</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```csharp
public string CreateAndUpdateKnowledgeBases { get; }
```

- *Type:* string

---

##### `CreateAndUpdateLinearAction`<sup>Required</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```csharp
public string CreateAndUpdateLinearAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMcpAction`<sup>Required</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```csharp
public string CreateAndUpdateMcpAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMondayAction`<sup>Required</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```csharp
public string CreateAndUpdateMondayAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsExchangeAction`<sup>Required</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```csharp
public string CreateAndUpdateMsExchangeAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsTeamsAction`<sup>Required</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```csharp
public string CreateAndUpdateMsTeamsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNewRelicAction`<sup>Required</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```csharp
public string CreateAndUpdateNewRelicAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNotionAction`<sup>Required</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```csharp
public string CreateAndUpdateNotionAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOneDriveAction`<sup>Required</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```csharp
public string CreateAndUpdateOneDriveAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOpenApiAction`<sup>Required</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```csharp
public string CreateAndUpdateOpenApiAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdatePagerDutyAction`<sup>Required</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```csharp
public string CreateAndUpdatePagerDutyAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSalesforceAction`<sup>Required</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```csharp
public string CreateAndUpdateSalesforceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```csharp
public string CreateAndUpdateSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPgmiAction`<sup>Required</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```csharp
public string CreateAndUpdateSandPgmiAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```csharp
public string CreateAndUpdateSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```csharp
public string CreateAndUpdateSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```csharp
public string CreateAndUpdateSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```csharp
public string CreateAndUpdateSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```csharp
public string CreateAndUpdateSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateServiceNowAction`<sup>Required</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```csharp
public string CreateAndUpdateServiceNowAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSharePointAction`<sup>Required</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```csharp
public string CreateAndUpdateSharePointAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSlackAction`<sup>Required</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```csharp
public string CreateAndUpdateSlackAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSmartsheetAction`<sup>Required</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```csharp
public string CreateAndUpdateSmartsheetAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateTextractAction`<sup>Required</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```csharp
public string CreateAndUpdateTextractAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThemes`<sup>Required</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```csharp
public string CreateAndUpdateThemes { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThresholdAlerts`<sup>Required</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```csharp
public string CreateAndUpdateThresholdAlerts { get; }
```

- *Type:* string

---

##### `CreateAndUpdateZendeskAction`<sup>Required</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```csharp
public string CreateAndUpdateZendeskAction { get; }
```

- *Type:* string

---

##### `CreateChatAgents`<sup>Required</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```csharp
public string CreateChatAgents { get; }
```

- *Type:* string

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```csharp
public string CreateDashboardExecutiveSummaryWithQ { get; }
```

- *Type:* string

---

##### `CreateSharedFolders`<sup>Required</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```csharp
public string CreateSharedFolders { get; }
```

- *Type:* string

---

##### `CreateSpaces`<sup>Required</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```csharp
public string CreateSpaces { get; }
```

- *Type:* string

---

##### `CreateSpiceDataset`<sup>Required</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```csharp
public string CreateSpiceDataset { get; }
```

- *Type:* string

---

##### `Dashboard`<sup>Required</sup> <a name="Dashboard" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```csharp
public string Dashboard { get; }
```

- *Type:* string

---

##### `EditVisualWithQ`<sup>Required</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```csharp
public string EditVisualWithQ { get; }
```

- *Type:* string

---

##### `ExportToCsv`<sup>Required</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```csharp
public string ExportToCsv { get; }
```

- *Type:* string

---

##### `ExportToCsvInScheduledReports`<sup>Required</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```csharp
public string ExportToCsvInScheduledReports { get; }
```

- *Type:* string

---

##### `ExportToExcel`<sup>Required</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```csharp
public string ExportToExcel { get; }
```

- *Type:* string

---

##### `ExportToExcelInScheduledReports`<sup>Required</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```csharp
public string ExportToExcelInScheduledReports { get; }
```

- *Type:* string

---

##### `ExportToPdf`<sup>Required</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```csharp
public string ExportToPdf { get; }
```

- *Type:* string

---

##### `ExportToPdfInScheduledReports`<sup>Required</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```csharp
public string ExportToPdfInScheduledReports { get; }
```

- *Type:* string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```csharp
public string Extension { get; }
```

- *Type:* string

---

##### `FactSetAction`<sup>Required</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```csharp
public string FactSetAction { get; }
```

- *Type:* string

---

##### `Flow`<sup>Required</sup> <a name="Flow" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```csharp
public string Flow { get; }
```

- *Type:* string

---

##### `GenericHttpAction`<sup>Required</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```csharp
public string GenericHttpAction { get; }
```

- *Type:* string

---

##### `GithubAction`<sup>Required</sup> <a name="GithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```csharp
public string GithubAction { get; }
```

- *Type:* string

---

##### `GoogleCalendarAction`<sup>Required</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```csharp
public string GoogleCalendarAction { get; }
```

- *Type:* string

---

##### `HubspotAction`<sup>Required</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```csharp
public string HubspotAction { get; }
```

- *Type:* string

---

##### `HuggingFaceAction`<sup>Required</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```csharp
public string HuggingFaceAction { get; }
```

- *Type:* string

---

##### `IncludeContentInScheduledReportsEmail`<sup>Required</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```csharp
public string IncludeContentInScheduledReportsEmail { get; }
```

- *Type:* string

---

##### `IntercomAction`<sup>Required</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```csharp
public string IntercomAction { get; }
```

- *Type:* string

---

##### `InvokeAppsAiInference`<sup>Required</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```csharp
public string InvokeAppsAiInference { get; }
```

- *Type:* string

---

##### `JiraAction`<sup>Required</sup> <a name="JiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```csharp
public string JiraAction { get; }
```

- *Type:* string

---

##### `KnowledgeBase`<sup>Required</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```csharp
public string KnowledgeBase { get; }
```

- *Type:* string

---

##### `LinearAction`<sup>Required</sup> <a name="LinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```csharp
public string LinearAction { get; }
```

- *Type:* string

---

##### `ManageSharedFolders`<sup>Required</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```csharp
public string ManageSharedFolders { get; }
```

- *Type:* string

---

##### `McpAction`<sup>Required</sup> <a name="McpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```csharp
public string McpAction { get; }
```

- *Type:* string

---

##### `MondayAction`<sup>Required</sup> <a name="MondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```csharp
public string MondayAction { get; }
```

- *Type:* string

---

##### `MsExchangeAction`<sup>Required</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```csharp
public string MsExchangeAction { get; }
```

- *Type:* string

---

##### `MsTeamsAction`<sup>Required</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```csharp
public string MsTeamsAction { get; }
```

- *Type:* string

---

##### `NewRelicAction`<sup>Required</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```csharp
public string NewRelicAction { get; }
```

- *Type:* string

---

##### `NotionAction`<sup>Required</sup> <a name="NotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```csharp
public string NotionAction { get; }
```

- *Type:* string

---

##### `OneDriveAction`<sup>Required</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```csharp
public string OneDriveAction { get; }
```

- *Type:* string

---

##### `OpenApiAction`<sup>Required</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```csharp
public string OpenApiAction { get; }
```

- *Type:* string

---

##### `PagerDutyAction`<sup>Required</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```csharp
public string PagerDutyAction { get; }
```

- *Type:* string

---

##### `PerformFlowUiTask`<sup>Required</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```csharp
public string PerformFlowUiTask { get; }
```

- *Type:* string

---

##### `PrintReports`<sup>Required</sup> <a name="PrintReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```csharp
public string PrintReports { get; }
```

- *Type:* string

---

##### `PublishWithoutApproval`<sup>Required</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```csharp
public string PublishWithoutApproval { get; }
```

- *Type:* string

---

##### `RenameSharedFolders`<sup>Required</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```csharp
public string RenameSharedFolders { get; }
```

- *Type:* string

---

##### `Research`<sup>Required</sup> <a name="Research" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```csharp
public string Research { get; }
```

- *Type:* string

---

##### `SalesforceAction`<sup>Required</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```csharp
public string SalesforceAction { get; }
```

- *Type:* string

---

##### `SandPGlobalEnergyAction`<sup>Required</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```csharp
public string SandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `SandPgmiAction`<sup>Required</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```csharp
public string SandPgmiAction { get; }
```

- *Type:* string

---

##### `SapBillOfMaterialAction`<sup>Required</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```csharp
public string SapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `SapBusinessPartnerAction`<sup>Required</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```csharp
public string SapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `SapMaterialStockAction`<sup>Required</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```csharp
public string SapMaterialStockAction { get; }
```

- *Type:* string

---

##### `SapPhysicalInventoryAction`<sup>Required</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```csharp
public string SapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `SapProductMasterDataAction`<sup>Required</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```csharp
public string SapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `ServiceNowAction`<sup>Required</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```csharp
public string ServiceNowAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockArsAction`<sup>Required</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```csharp
public string ShareAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockFsAction`<sup>Required</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```csharp
public string ShareAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockKrsAction`<sup>Required</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```csharp
public string ShareAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonSThreeAction`<sup>Required</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```csharp
public string ShareAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `ShareAnalyses`<sup>Required</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```csharp
public string ShareAnalyses { get; }
```

- *Type:* string

---

##### `ShareApps`<sup>Required</sup> <a name="ShareApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```csharp
public string ShareApps { get; }
```

- *Type:* string

---

##### `ShareAsanaAction`<sup>Required</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```csharp
public string ShareAsanaAction { get; }
```

- *Type:* string

---

##### `ShareBambooHrAction`<sup>Required</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```csharp
public string ShareBambooHrAction { get; }
```

- *Type:* string

---

##### `ShareBoxAgentAction`<sup>Required</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```csharp
public string ShareBoxAgentAction { get; }
```

- *Type:* string

---

##### `ShareCanvaAgentAction`<sup>Required</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```csharp
public string ShareCanvaAgentAction { get; }
```

- *Type:* string

---

##### `ShareChatAgents`<sup>Required</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```csharp
public string ShareChatAgents { get; }
```

- *Type:* string

---

##### `ShareComprehendAction`<sup>Required</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```csharp
public string ShareComprehendAction { get; }
```

- *Type:* string

---

##### `ShareComprehendMedicalAction`<sup>Required</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```csharp
public string ShareComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `ShareConfluenceAction`<sup>Required</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```csharp
public string ShareConfluenceAction { get; }
```

- *Type:* string

---

##### `ShareDashboards`<sup>Required</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```csharp
public string ShareDashboards { get; }
```

- *Type:* string

---

##### `ShareDatasets`<sup>Required</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```csharp
public string ShareDatasets { get; }
```

- *Type:* string

---

##### `ShareDataSources`<sup>Required</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```csharp
public string ShareDataSources { get; }
```

- *Type:* string

---

##### `ShareFactSetAction`<sup>Required</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```csharp
public string ShareFactSetAction { get; }
```

- *Type:* string

---

##### `ShareGenericHttpAction`<sup>Required</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```csharp
public string ShareGenericHttpAction { get; }
```

- *Type:* string

---

##### `ShareGithubAction`<sup>Required</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```csharp
public string ShareGithubAction { get; }
```

- *Type:* string

---

##### `ShareGoogleCalendarAction`<sup>Required</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```csharp
public string ShareGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `ShareHubspotAction`<sup>Required</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```csharp
public string ShareHubspotAction { get; }
```

- *Type:* string

---

##### `ShareHuggingFaceAction`<sup>Required</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```csharp
public string ShareHuggingFaceAction { get; }
```

- *Type:* string

---

##### `ShareIntercomAction`<sup>Required</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```csharp
public string ShareIntercomAction { get; }
```

- *Type:* string

---

##### `ShareJiraAction`<sup>Required</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```csharp
public string ShareJiraAction { get; }
```

- *Type:* string

---

##### `ShareKnowledgeBases`<sup>Required</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```csharp
public string ShareKnowledgeBases { get; }
```

- *Type:* string

---

##### `ShareLinearAction`<sup>Required</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```csharp
public string ShareLinearAction { get; }
```

- *Type:* string

---

##### `ShareMcpAction`<sup>Required</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```csharp
public string ShareMcpAction { get; }
```

- *Type:* string

---

##### `ShareMondayAction`<sup>Required</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```csharp
public string ShareMondayAction { get; }
```

- *Type:* string

---

##### `ShareMsExchangeAction`<sup>Required</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```csharp
public string ShareMsExchangeAction { get; }
```

- *Type:* string

---

##### `ShareMsTeamsAction`<sup>Required</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```csharp
public string ShareMsTeamsAction { get; }
```

- *Type:* string

---

##### `ShareNewRelicAction`<sup>Required</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```csharp
public string ShareNewRelicAction { get; }
```

- *Type:* string

---

##### `ShareNotionAction`<sup>Required</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```csharp
public string ShareNotionAction { get; }
```

- *Type:* string

---

##### `ShareOneDriveAction`<sup>Required</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```csharp
public string ShareOneDriveAction { get; }
```

- *Type:* string

---

##### `ShareOpenApiAction`<sup>Required</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```csharp
public string ShareOpenApiAction { get; }
```

- *Type:* string

---

##### `SharePagerDutyAction`<sup>Required</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```csharp
public string SharePagerDutyAction { get; }
```

- *Type:* string

---

##### `SharePointAction`<sup>Required</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```csharp
public string SharePointAction { get; }
```

- *Type:* string

---

##### `ShareSalesforceAction`<sup>Required</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```csharp
public string ShareSalesforceAction { get; }
```

- *Type:* string

---

##### `ShareSandPGlobalEnergyAction`<sup>Required</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```csharp
public string ShareSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `ShareSandPgmiAction`<sup>Required</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```csharp
public string ShareSandPgmiAction { get; }
```

- *Type:* string

---

##### `ShareSapBillOfMaterialAction`<sup>Required</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```csharp
public string ShareSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `ShareSapBusinessPartnerAction`<sup>Required</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```csharp
public string ShareSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `ShareSapMaterialStockAction`<sup>Required</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```csharp
public string ShareSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `ShareSapPhysicalInventoryAction`<sup>Required</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```csharp
public string ShareSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `ShareSapProductMasterDataAction`<sup>Required</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```csharp
public string ShareSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `ShareServiceNowAction`<sup>Required</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```csharp
public string ShareServiceNowAction { get; }
```

- *Type:* string

---

##### `ShareSharePointAction`<sup>Required</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```csharp
public string ShareSharePointAction { get; }
```

- *Type:* string

---

##### `ShareSlackAction`<sup>Required</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```csharp
public string ShareSlackAction { get; }
```

- *Type:* string

---

##### `ShareSmartsheetAction`<sup>Required</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```csharp
public string ShareSmartsheetAction { get; }
```

- *Type:* string

---

##### `ShareSpaces`<sup>Required</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```csharp
public string ShareSpaces { get; }
```

- *Type:* string

---

##### `ShareTextractAction`<sup>Required</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```csharp
public string ShareTextractAction { get; }
```

- *Type:* string

---

##### `ShareZendeskAction`<sup>Required</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```csharp
public string ShareZendeskAction { get; }
```

- *Type:* string

---

##### `SlackAction`<sup>Required</sup> <a name="SlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```csharp
public string SlackAction { get; }
```

- *Type:* string

---

##### `SmartsheetAction`<sup>Required</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```csharp
public string SmartsheetAction { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `SubscribeDashboardEmailReports`<sup>Required</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```csharp
public string SubscribeDashboardEmailReports { get; }
```

- *Type:* string

---

##### `TextractAction`<sup>Required</sup> <a name="TextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```csharp
public string TextractAction { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `UseAgentWebSearch`<sup>Required</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```csharp
public string UseAgentWebSearch { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockArsAction`<sup>Required</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```csharp
public string UseAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockFsAction`<sup>Required</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```csharp
public string UseAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockKrsAction`<sup>Required</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```csharp
public string UseAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `UseAmazonSThreeAction`<sup>Required</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```csharp
public string UseAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `UseAsanaAction`<sup>Required</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```csharp
public string UseAsanaAction { get; }
```

- *Type:* string

---

##### `UseBambooHrAction`<sup>Required</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```csharp
public string UseBambooHrAction { get; }
```

- *Type:* string

---

##### `UseBedrockModels`<sup>Required</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```csharp
public string UseBedrockModels { get; }
```

- *Type:* string

---

##### `UseBoxAgentAction`<sup>Required</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```csharp
public string UseBoxAgentAction { get; }
```

- *Type:* string

---

##### `UseCanvaAgentAction`<sup>Required</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```csharp
public string UseCanvaAgentAction { get; }
```

- *Type:* string

---

##### `UseComprehendAction`<sup>Required</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```csharp
public string UseComprehendAction { get; }
```

- *Type:* string

---

##### `UseComprehendMedicalAction`<sup>Required</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```csharp
public string UseComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `UseConfluenceAction`<sup>Required</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```csharp
public string UseConfluenceAction { get; }
```

- *Type:* string

---

##### `UseFactSetAction`<sup>Required</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```csharp
public string UseFactSetAction { get; }
```

- *Type:* string

---

##### `UseGenericHttpAction`<sup>Required</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```csharp
public string UseGenericHttpAction { get; }
```

- *Type:* string

---

##### `UseGithubAction`<sup>Required</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```csharp
public string UseGithubAction { get; }
```

- *Type:* string

---

##### `UseGoogleCalendarAction`<sup>Required</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```csharp
public string UseGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `UseHubspotAction`<sup>Required</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```csharp
public string UseHubspotAction { get; }
```

- *Type:* string

---

##### `UseHuggingFaceAction`<sup>Required</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```csharp
public string UseHuggingFaceAction { get; }
```

- *Type:* string

---

##### `UseIntercomAction`<sup>Required</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```csharp
public string UseIntercomAction { get; }
```

- *Type:* string

---

##### `UseJiraAction`<sup>Required</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```csharp
public string UseJiraAction { get; }
```

- *Type:* string

---

##### `UseLinearAction`<sup>Required</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```csharp
public string UseLinearAction { get; }
```

- *Type:* string

---

##### `UseMcpAction`<sup>Required</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```csharp
public string UseMcpAction { get; }
```

- *Type:* string

---

##### `UseMondayAction`<sup>Required</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```csharp
public string UseMondayAction { get; }
```

- *Type:* string

---

##### `UseMsExchangeAction`<sup>Required</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```csharp
public string UseMsExchangeAction { get; }
```

- *Type:* string

---

##### `UseMsTeamsAction`<sup>Required</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```csharp
public string UseMsTeamsAction { get; }
```

- *Type:* string

---

##### `UseNewRelicAction`<sup>Required</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```csharp
public string UseNewRelicAction { get; }
```

- *Type:* string

---

##### `UseNotionAction`<sup>Required</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```csharp
public string UseNotionAction { get; }
```

- *Type:* string

---

##### `UseOneDriveAction`<sup>Required</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```csharp
public string UseOneDriveAction { get; }
```

- *Type:* string

---

##### `UseOpenApiAction`<sup>Required</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```csharp
public string UseOpenApiAction { get; }
```

- *Type:* string

---

##### `UsePagerDutyAction`<sup>Required</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```csharp
public string UsePagerDutyAction { get; }
```

- *Type:* string

---

##### `UseSalesforceAction`<sup>Required</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```csharp
public string UseSalesforceAction { get; }
```

- *Type:* string

---

##### `UseSandPGlobalEnergyAction`<sup>Required</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```csharp
public string UseSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `UseSandPgmiAction`<sup>Required</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```csharp
public string UseSandPgmiAction { get; }
```

- *Type:* string

---

##### `UseSapBillOfMaterialAction`<sup>Required</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```csharp
public string UseSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `UseSapBusinessPartnerAction`<sup>Required</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```csharp
public string UseSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `UseSapMaterialStockAction`<sup>Required</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```csharp
public string UseSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `UseSapPhysicalInventoryAction`<sup>Required</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```csharp
public string UseSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `UseSapProductMasterDataAction`<sup>Required</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```csharp
public string UseSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `UseServiceNowAction`<sup>Required</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```csharp
public string UseServiceNowAction { get; }
```

- *Type:* string

---

##### `UseSharePointAction`<sup>Required</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```csharp
public string UseSharePointAction { get; }
```

- *Type:* string

---

##### `UseSlackAction`<sup>Required</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```csharp
public string UseSlackAction { get; }
```

- *Type:* string

---

##### `UseSmartsheetAction`<sup>Required</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```csharp
public string UseSmartsheetAction { get; }
```

- *Type:* string

---

##### `UseTextractAction`<sup>Required</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```csharp
public string UseTextractAction { get; }
```

- *Type:* string

---

##### `UseZendeskAction`<sup>Required</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```csharp
public string UseZendeskAction { get; }
```

- *Type:* string

---

##### `ViewAccountSpiceCapacity`<sup>Required</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```csharp
public string ViewAccountSpiceCapacity { get; }
```

- *Type:* string

---

##### `ZendeskAction`<sup>Required</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```csharp
public string ZendeskAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a>

---


### DataAwsccQuicksightCustomPermissionsTagsList <a name="DataAwsccQuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get"></a>

```csharp
private DataAwsccQuicksightCustomPermissionsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightCustomPermissionsTagsOutputReference <a name="DataAwsccQuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a>

---



