# `dataAwsccResiliencehubApp` Submodule <a name="`dataAwsccResiliencehubApp` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubApp <a name="DataAwsccResiliencehubApp" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubApp(Construct Scope, string Id, DataAwsccResiliencehubAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig">DataAwsccResiliencehubAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig">DataAwsccResiliencehubAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubApp.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccResiliencehubApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appArn">AppArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appAssessmentSchedule">AppAssessmentSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appTemplateBody">AppTemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.driftStatus">DriftStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.eventSubscriptions">EventSubscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList">DataAwsccResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference">DataAwsccResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resiliencyPolicyArn">ResiliencyPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resourceMappings">ResourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList">DataAwsccResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AppArn`<sup>Required</sup> <a name="AppArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appArn"></a>

```csharp
public string AppArn { get; }
```

- *Type:* string

---

##### `AppAssessmentSchedule`<sup>Required</sup> <a name="AppAssessmentSchedule" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appAssessmentSchedule"></a>

```csharp
public string AppAssessmentSchedule { get; }
```

- *Type:* string

---

##### `AppTemplateBody`<sup>Required</sup> <a name="AppTemplateBody" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appTemplateBody"></a>

```csharp
public string AppTemplateBody { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DriftStatus`<sup>Required</sup> <a name="DriftStatus" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.driftStatus"></a>

```csharp
public string DriftStatus { get; }
```

- *Type:* string

---

##### `EventSubscriptions`<sup>Required</sup> <a name="EventSubscriptions" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.eventSubscriptions"></a>

```csharp
public DataAwsccResiliencehubAppEventSubscriptionsList EventSubscriptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList">DataAwsccResiliencehubAppEventSubscriptionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.permissionModel"></a>

```csharp
public DataAwsccResiliencehubAppPermissionModelOutputReference PermissionModel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference">DataAwsccResiliencehubAppPermissionModelOutputReference</a>

---

##### `ResiliencyPolicyArn`<sup>Required</sup> <a name="ResiliencyPolicyArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resiliencyPolicyArn"></a>

```csharp
public string ResiliencyPolicyArn { get; }
```

- *Type:* string

---

##### `ResourceMappings`<sup>Required</sup> <a name="ResourceMappings" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resourceMappings"></a>

```csharp
public DataAwsccResiliencehubAppResourceMappingsList ResourceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList">DataAwsccResiliencehubAppResourceMappingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubAppConfig <a name="DataAwsccResiliencehubAppConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/resiliencehub_app#id DataAwsccResiliencehubApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubAppEventSubscriptions <a name="DataAwsccResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppEventSubscriptions {

};
```


### DataAwsccResiliencehubAppPermissionModel <a name="DataAwsccResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppPermissionModel {

};
```


### DataAwsccResiliencehubAppResourceMappings <a name="DataAwsccResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppResourceMappings {

};
```


### DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId <a name="DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubAppEventSubscriptionsList <a name="DataAwsccResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppEventSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.get"></a>

```csharp
private DataAwsccResiliencehubAppEventSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccResiliencehubAppEventSubscriptionsOutputReference <a name="DataAwsccResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppEventSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions">DataAwsccResiliencehubAppEventSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubAppEventSubscriptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions">DataAwsccResiliencehubAppEventSubscriptions</a>

---


### DataAwsccResiliencehubAppPermissionModelOutputReference <a name="DataAwsccResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppPermissionModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel">DataAwsccResiliencehubAppPermissionModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArns`<sup>Required</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```csharp
public string[] CrossAccountRoleArns { get; }
```

- *Type:* string[]

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubAppPermissionModel InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel">DataAwsccResiliencehubAppPermissionModel</a>

---


### DataAwsccResiliencehubAppResourceMappingsList <a name="DataAwsccResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppResourceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.get"></a>

```csharp
private DataAwsccResiliencehubAppResourceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccResiliencehubAppResourceMappingsOutputReference <a name="DataAwsccResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppResourceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">EksSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">LogicalStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.mappingType">MappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">PhysicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">TerraformSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings">DataAwsccResiliencehubAppResourceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EksSourceName`<sup>Required</sup> <a name="EksSourceName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```csharp
public string EksSourceName { get; }
```

- *Type:* string

---

##### `LogicalStackName`<sup>Required</sup> <a name="LogicalStackName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```csharp
public string LogicalStackName { get; }
```

- *Type:* string

---

##### `MappingType`<sup>Required</sup> <a name="MappingType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```csharp
public string MappingType { get; }
```

- *Type:* string

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```csharp
public DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference PhysicalResourceId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `TerraformSourceName`<sup>Required</sup> <a name="TerraformSourceName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```csharp
public string TerraformSourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubAppResourceMappings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings">DataAwsccResiliencehubAppResourceMappings</a>

---


### DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId</a>

---



