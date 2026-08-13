# `dataAwsccApprunnerObservabilityConfiguration` Submodule <a name="`dataAwsccApprunnerObservabilityConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApprunnerObservabilityConfiguration <a name="DataAwsccApprunnerObservabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apprunner_observability_configuration awscc_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.NewDataAwsccApprunnerObservabilityConfiguration(scope Construct, id *string, config DataAwsccApprunnerObservabilityConfigurationConfig) DataAwsccApprunnerObservabilityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig">DataAwsccApprunnerObservabilityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig">DataAwsccApprunnerObservabilityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApprunnerObservabilityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApprunnerObservabilityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApprunnerObservabilityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.latest">Latest</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationArn">ObservabilityConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationName">ObservabilityConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">ObservabilityConfigurationRevision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList">DataAwsccApprunnerObservabilityConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.traceConfiguration">TraceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference">DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.latest"></a>

```go
func Latest() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ObservabilityConfigurationArn`<sup>Required</sup> <a name="ObservabilityConfigurationArn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```go
func ObservabilityConfigurationArn() *string
```

- *Type:* *string

---

##### `ObservabilityConfigurationName`<sup>Required</sup> <a name="ObservabilityConfigurationName" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```go
func ObservabilityConfigurationName() *string
```

- *Type:* *string

---

##### `ObservabilityConfigurationRevision`<sup>Required</sup> <a name="ObservabilityConfigurationRevision" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```go
func ObservabilityConfigurationRevision() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tags"></a>

```go
func Tags() DataAwsccApprunnerObservabilityConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList">DataAwsccApprunnerObservabilityConfigurationTagsList</a>

---

##### `TraceConfiguration`<sup>Required</sup> <a name="TraceConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```go
func TraceConfiguration() DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference">DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApprunnerObservabilityConfigurationConfig <a name="DataAwsccApprunnerObservabilityConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

&dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apprunner_observability_configuration#id DataAwsccApprunnerObservabilityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApprunnerObservabilityConfigurationTags <a name="DataAwsccApprunnerObservabilityConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

&dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfigurationTags {

}
```


### DataAwsccApprunnerObservabilityConfigurationTraceConfiguration <a name="DataAwsccApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

&dataawsccapprunnerobservabilityconfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApprunnerObservabilityConfigurationTagsList <a name="DataAwsccApprunnerObservabilityConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.NewDataAwsccApprunnerObservabilityConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApprunnerObservabilityConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApprunnerObservabilityConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApprunnerObservabilityConfigurationTagsOutputReference <a name="DataAwsccApprunnerObservabilityConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.NewDataAwsccApprunnerObservabilityConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApprunnerObservabilityConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags">DataAwsccApprunnerObservabilityConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApprunnerObservabilityConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags">DataAwsccApprunnerObservabilityConfigurationTags</a>

---


### DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerobservabilityconfiguration"

dataawsccapprunnerobservabilityconfiguration.NewDataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration">DataAwsccApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration">DataAwsccApprunnerObservabilityConfigurationTraceConfiguration</a>

---



